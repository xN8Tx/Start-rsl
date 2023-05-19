import sharp from 'sharp';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const toWebp = async (req) => {
  let type = req.file.filename.split('.').pop();
  const f = req.file.filename;
  const s = f.slice(0, -(type.length));
  
  type = 'webp';
  const fileName = s + type; 
  
  const ImgBuffer = await fs.promises.readFile(req.file.path);
  const webpBuffer = await sharp(ImgBuffer, { animated: true }).webp().toBuffer();
  
  const webpPath = req.file.destination + fileName;
  await fs.promises.writeFile(webpPath, webpBuffer);
  await fs.promises.unlink(req.file.path);
  
  return `${process.env.API_IP}/images/${fileName}`;
};
export { toWebp };
