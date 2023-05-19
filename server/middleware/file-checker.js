import multer from 'multer';

import { join } from 'path'; // УДАЛИТЬ ПОТОМ ТАК КАК ЭТО ДЛЯ HTML 
import __dirname from '../dirname.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, join(__dirname, '/assets/images/'));
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + performance.now());
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const fileChecker = multer({ storage, fileFilter });

export { fileChecker };
