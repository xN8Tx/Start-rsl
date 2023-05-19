import fs from 'fs';
import { join } from 'path';

import { usersPool } from '../db.js';
import { toWebp } from '../utils/file-helpers.js';
import __dirname from '../dirname.js';

class FileController {
  async avatar(req, res) {
    try {
      if (req.file !== null) {
        const id = req.params.id;
        const pathToImage = await toWebp(req);
        
        const user = await usersPool.query('SELECT avatar FROM users WHERE id = $1',[id])
          .then(res => res.rows[0].avatar.split('/').pop())
          .then(res => {
            if (res !== 'avatar.webp') return fs.unlink(join(__dirname + '/assets/images/' + res), () => {});
          })
          .then(() => usersPool.query('UPDATE users SET avatar = $1 WHERE id = $2 RETURNING users.avatar', [ pathToImage, id ] ));
        
        res.json({ message: user.rows[0].avatar}); 
      } else {
        throw new Error('Нет файла!');
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  async cover(req, res) {
    try {
      if (req.file !== null) {
        const id = req.params.id;
        const pathToImage = await toWebp(req);
        
        const user = await usersPool.query('SELECT cover FROM users WHERE id = $1',[id])
          .then(res => res.rows[0].cover.split('/').pop())
          .then(res => {
            if (res !== 'cover.webp') return fs.unlink(join(__dirname + '/assets/images/' + res), () => {});
          })
          .then(() => usersPool.query('UPDATE users SET cover = $1 WHERE id = $2 RETURNING cover', [ pathToImage, id ] ));
        
        res.json({ message: user.rows[0].cover}); 
      } else {
        throw new Error('Нет файла!');
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  async course(req, res) {
    try {
      if (req.file !== null) {
        const pathToImage = await toWebp(req);
        
        res.json({ message: pathToImage});
      } else {
        throw new Error('Нет файла!');
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const fileController = new FileController();

export default fileController;