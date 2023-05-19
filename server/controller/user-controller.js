import { passwordPool, usersPool } from '../db.js';

class UserController {
  async getAll(req, res) {
    try {
      const users = await usersPool.query('SELECT * FROM users');
      
      res.json({ message: users.rows}); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async getById(req, res) {
    try {
      const id = req.params.id;
      const user = await usersPool.query('SELECT * FROM users WHERE id = $1', [id]);
      
      if (!user.rows[0].hasOwnProperty('id')) throw new Error('Такого пользователя не существует');
      
      res.json({ message: user.rows[0]}); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async delete(req, res) {
    try {
      const id = req.params.id;
      
      await usersPool.query('DELETE FROM users WHERE id = $1', [id]);
      await passwordPool.query('DELETE FROM passwords WHERE id = $1', [id]);
      
      res.json({ message: 'Успешно удалили'}); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async put(req, res) {
    try {
      const id = req.params.id;
      const { name, surname } = req.body;
      
      const user = await usersPool.query(
        'UPDATE users SET name = $1, surname = $2 WHERE id = $3 RETURNING *',
        [ name, surname, id ] 
      );
      
      res.json({ message: user.rows[0]}); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async putCourse(req, res) {
    try {
      const id = req.params.id;
      const title = JSON.stringify(req.body);
      
      const user = await usersPool.query(
        'UPDATE users SET courses = $1 WHERE id = $2 RETURNING courses',
        [ title, id ] 
      );
      
      
      res.json({ message: user.rows[0].courses }); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async putExperience(req, res) {
    try {
      const id = req.params.id;
      const { title } = req.body;
      
      const user = await usersPool.query(
        'UPDATE users SET experience = $1 WHERE id = $2 RETURNING experience',
        [ title, id ] 
      );
      
      res.json({ message: user.rows[0].experience }); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async putCRM(req, res) {
    try {
      const id = req.params.id;
      const { role } = req.body;
      
      const user = await usersPool.query(
        'UPDATE users SET role = $1 WHERE id = $2 RETURNING *',
        [ role, id ] 
      );
      
      res.json({ message: user.rows[0] }); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const userController = new UserController();

export default userController;
