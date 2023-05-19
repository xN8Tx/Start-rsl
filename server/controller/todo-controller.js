import { usersPool } from '../db.js';

class TodoController {
  async get(req, res) {
    try {
      const id = req.params.id;
      
      const todos = await usersPool.query(
        'SELECT * FROM todo WHERE user_id = $1',
        [id]
      );
      
      res.json({ message: todos.rows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async post(req, res) {
    try {
      const { user_id, body } = req.body;
      
      const todo = await usersPool.query(
        'INSERT INTO todo (user_id, body, status) VALUES ($1, $2, false) RETURNING *',
        [user_id, body]
      );
      
      res.json({ message: todo.rows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async put(req, res) {
    try {
      const id = req.params.id;
      const { status } = req.body;
      
      const todo = await usersPool.query(
        'UPDATE todo SET status = $1 WHERE id = $2 RETURNING *',
        [status, id]
      );
      
      res.json({ message: todo.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async delete(req, res) {
    try {
      const id = req.params.id;
      
      const todo = await usersPool.query(
        'DELETE FROM todo WHERE id = $1 RETURNING *',
        [id]
      );
      
      res.json({ message: todo.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const todoController = new TodoController();  

export default todoController;