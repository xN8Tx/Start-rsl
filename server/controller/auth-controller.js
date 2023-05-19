import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { passwordPool } from '../db.js';
import { registrationTest } from '../tests/registration-tester.js';
import { jwtTokens } from '../utils/jwt-helpers.js';
import { generateUser } from '../utils/user-helpers.js';

class AuthController {
  async registration(req, res) {
    try {
      const { email, password } = req.body;
      
      // ПРОВЕРКА НА КОРРЕКТНЫЕ ДАННЫЕ
      const errors = registrationTest(email, password);
      if (errors) throw new Error(errors); 
      
      // ПРОВЕРКА НА ПОЧТУ
      const candidates = await passwordPool.query(
        'SELECT * FROM passwords WHERE email = $1', 
        [email]
      );
      if (candidates.rows.length !== 0 ) throw new Error('Пользователь с таким email уже существует');
      
      // ХЭШ ПАРОЛЯ
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // ДОБАВЛЕНИЕ В БД
      const newUser = await passwordPool.query(
        'INSERT INTO passwords (email, password) VALUES ($1, $2) RETURNING id, email', 
        [req.body.email, hashedPassword]
      );
      await generateUser(newUser.rows[0].id);

      // JWT
      let tokens = jwtTokens(newUser.rows[0]);
      
      res.cookie('refresh_token', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.status(200).json({ message: tokens.accessToken });
    } catch (err) {  
      res.status(500).json({ message: err.message });
    }
  }
  
  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      // EMAIL
      const users = await passwordPool.query(
        'SELECT * FROM passwords WHERE email = $1', 
        [email]
      );
      if (users.rows.length === 0 ) return res.status(403).json({ message: 'Пользователь/Пароль введен неверно' });
      
      // PASSWORD CHECK
      const validPassword = await bcrypt.compare(password, users.rows[0].password);
      if (!validPassword) return res.status(403).json({ message: 'Пользователь/Пароль введен неверно' });
      
      // JWT  
      let tokens = jwtTokens(users.rows[0]);
      
      res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      return res.status(200).json({ message: tokens.accessToken });
      
    } catch (err) {
      res.status(403).json({ message: err.message });
    }
  }
  
  async refresh(req, res) {
    try {
      const refreshToken = req.cookies.refresh_token;
      
      if (!refreshToken === null ) return res.status(401).json({ message: 'Войдите в аккаунт снова' });
      
      jwt.verify(
        refreshToken, 
        process.env.REFRESH_TOKEN_SECRET,
        (error, user) => {
          if (error) return res.status(403).json({ message: error.message });
          
          let tokens = jwtTokens(user);
          
          res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
          res.status(200).json({ message: tokens.accessToken });
        }
      );
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async logout(req, res) {
    try {
      res.clearCookie('refresh_token');
      return res.status(200).json({ message: 'Вы вышли из аккаунта' });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
};

const authController = new AuthController();

export default authController;
