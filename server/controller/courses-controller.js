import { coursesPool } from '../db.js';

class CoursesController {
  async post(req, res) {
    try {
      const { name, description, cover, level, material, experience, rating } = req.body;
      
      const id = await coursesPool.query(
        'INSERT INTO courses (name, description, cover, level, experience, material, rating) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', 
        [name, description, cover, level, experience, material, rating]
      );
      const newCourse = await coursesPool.query(
        'SELECT courses.id, courses.name, courses.description, courses.cover, courses.experience, courses.rating, level.level FROM courses, level WHERE courses.level = level.id and courses.id = $1',
        [id.rows[0].id]
      );
      
      res.json({ message: newCourse.rows[0]});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getByCount(req, res) {
    try {
      const count = req.params.count;
      const courses = await coursesPool.query('SELECT courses.id, courses.name, courses.cover, courses.rating, level.level FROM courses, level WHERE courses.level = level.id LIMIT $1', [count]);
      
      res.json({ message: courses.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const courses = await coursesPool.query('SELECT courses.id, courses.name, courses.description, courses.cover, courses.experience, courses.rating, level.level FROM courses, level WHERE courses.level = level.id');
      
      res.json({ message: courses.rows });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async getById(req, res) {
    try {
      const id = req.params.id;
    
      const course = await coursesPool.query('SELECT courses.id, courses.name, courses.description, courses.cover, courses.experience, courses.material, courses.rating, level.level FROM courses, level WHERE (courses.level = level.id AND courses.id = $1)', [id]);
      if (course.rows.length === 0) res.status(500).json({ message: err.message });
      
      res.json({ message: course.rows[0] });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async put(req, res) {
    try {
      const id = req.params.id;
      const { name, description, cover, level, material } = req.body;
      
      const course = await coursesPool.query(
        'UPDATE courses SET name = $1, description = $2, cover = $3, level = $4, material = $5 WHERE id = $6 RETURNING *', 
        [name, description, cover, level, material, id]
      );
      
      res.json({ message: course.rows[0] });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async putRating(req, res) {
    try {
      const id = req.params.id;
      const { rating } = req.body;
      
      const course = await coursesPool.query(
        'UPDATE courses SET rating = $1 WHERE id = $2 RETURNING *', 
        [rating, id]
      );
      
      res.json({ message: course.rows[0] });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      
      await coursesPool.query('DELETE FROM courses WHERE id = $1', [id]);
      
      res.json({ message: id });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

const coursesController = new CoursesController();

export default coursesController;