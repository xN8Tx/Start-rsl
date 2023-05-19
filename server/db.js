import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;

dotenv.config();

// To local config to connection db
const passwordsLocalConfig = {
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "db_passwords",
};

const coursesLocalConfig = {
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "db_courses",
};

const usersLocalConfig = {
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "db_users",
};

const poolPasswordConfig = process.env.DATABASE_PASSWORD_URL
  ? {
      connectionString: process.env.DATABASE_PASSWORD_URL,
      ssl: false,
    }
  : passwordsLocalConfig;

const poolCoursesConfig = process.env.DATABASE_COURSES_URL
  ? {
      connectionString: process.env.DATABASE_COURSES_URL,
      ssl: false,
    }
  : coursesLocalConfig;

const poolUsersConfig = process.env.DATABASE_USERS_URL
  ? {
      connectionString: process.env.DATABASE_USERS_URL,
      ssl: false,
    }
  : usersLocalConfig;

const passwordPool = new Pool(poolPasswordConfig);
const coursesPool = new Pool(poolCoursesConfig);
const usersPool = new Pool(poolUsersConfig);

export { passwordPool, coursesPool, usersPool };
