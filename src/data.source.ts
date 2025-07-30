import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Task } from './task/entities/task.entity';
import { Assigne } from './assignes/entities/assigne.entity';
dotenv.config();
const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
 entities:[User,Task,Assigne],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
export default AppDataSource;