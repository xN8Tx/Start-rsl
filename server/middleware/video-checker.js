import multer from 'multer';

import { join } from 'path'; // УДАЛИТЬ ПОТОМ ТАК КАК ЭТО ДЛЯ HTML 
import __dirname from '../dirname.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, join(__dirname, '/assets/videos/'));
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + performance.now() + '.mp4');
  },
});

const types = ['video/webm'];

const videoFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const videoChecker = multer({ storage, videoFilter });

export { videoChecker };