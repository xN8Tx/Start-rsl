import dotenv from 'dotenv';

import { usersPool } from '../db.js';

dotenv.config();

const generateUser = async (id) => {
  try { 
    const newUser = {
      id: Number(id),
      name: 'user' + id,
      surname: '',
      date: new Date().toDateString(),
      cover: `${process.env.API_IP}/images/cover.webp`,
      avatar: `${process.env.API_IP}/images/avatar.webp`,
      experience: 0,
      role: 2
    };
    
    const addUser = await usersPool.query(
      'INSERT INTO users (id, name, surname, date, experience, role, avatar, cover) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [newUser.id, newUser.name, newUser.surname, newUser.date, newUser.experience, newUser.role, newUser.avatar, newUser.cover]  
    );
    
    return addUser.rows[0];
  } catch (err) {
    return ({ error: err.message });
  }
};

export { generateUser };