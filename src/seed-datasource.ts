import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from './user/entities/user.entity';
import { Assigne } from './assignes/entities/assigne.entity';
import { Task } from './task/entities/task.entity';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username:process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  synchronize: true,
   entities:[User,Assigne,Task],
});