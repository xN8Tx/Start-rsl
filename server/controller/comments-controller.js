import { usersPool } from '../db.js';

class CommentsController {
  async getAll(req, res) {
    try {
      const comments = await usersPool.query('SELECT comments.*, users.name, users.surname, users.avatar FROM comments, users WHERE comments.user_id = users.id');
      
      res.json({ message: comments.rows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async getById(req, res) {
    try {
      const id = req.params.id;
      
      const comments = await usersPool.query(
        'SELECT comments.*, users.name, users.surname, users.avatar FROM comments, users WHERE (comments.user_id = users.id and comments.course_id = $1)', 
        [id]
      );
      
      res.json({ message: comments.rows });
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async post(req, res) {
    try {
      const { user_id, course_id, body } = req.body;
      const date = new Date().toDateString();

      const newComment = await usersPool.query(
        'INSERT INTO comments (user_id, course_id, body, date, likes, dislikes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', 
        [user_id, course_id, body, date, '[]', '[]']
      );
      const comments = await usersPool.query(
        'SELECT comments.*, users.name, users.surname, users.avatar FROM comments, users WHERE (comments.user_id = users.id and comments.id = $1)', 
        [newComment.rows[0].id]
      );
      
      res.json({ message: comments.rows[0] });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }
  
  async delete(req, res) {
    try {
      const id = req.params.id;
      
      await usersPool.query('DELETE FROM comments WHERE id = $1', [id]); 
      
      res.json({ message: 'Успешно удалено' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async putLikes(req, res) {
    try {
      const id = req.params.id;
      const likes = req.body;
      
      const comments = await usersPool.query('UPDATE comments SET likes = $1 WHERE id = $2 RETURNING likes', [JSON.stringify(likes), id]); 
      
      res.json({ message: comments.rows[0].likes });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  
  async putDislikes(req, res) {
    try {
      const id = req.params.id;
      const dislikes = req.body;
      
      const comments = await usersPool.query('UPDATE comments SET dislikes = $1 WHERE id = $2 RETURNING dislikes', [JSON.stringify(dislikes), id]); 
      
      res.json({ message: comments.rows[0].dislikes });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const commentsController = new CommentsController();

export default commentsController;