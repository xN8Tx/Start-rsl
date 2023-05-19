import { dirname } from 'path'; // УДАЛИТЬ ПОТОМ ТАК КАК ЭТО ДЛЯ HTML 
import { fileURLToPath } from 'url';  // УДАЛИТЬ ПОТОМ ТАК КАК ЭТО ДЛЯ HTML 

const __dirname = dirname(fileURLToPath(import.meta.url));

export default __dirname;