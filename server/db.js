import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();


const poolPasswordConfig = {
  connectionString: process.env.DATABASE_PASSWORD_URL, 
  ssl: false
};
const poolCoursesConfig = { 
  connectionString: process.env.DATABASE_COURSES_URL, 
  ssl: false
};
const poolUsersConfig = { 
  connectionString: process.env.DATABASE_USERS_URL, 
  ssl: false
};

const passwordPool = new Pool(poolPasswordConfig);
const coursesPool = new Pool(poolCoursesConfig);
const usersPool = new Pool(poolUsersConfig);

export { passwordPool, coursesPool, usersPool };