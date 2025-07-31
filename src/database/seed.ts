import 'reflect-metadata';
import AppDataSource from 'src/data.source';
import TaskSeeder from './seeds/task.seed';


async function seed() {
  await AppDataSource.initialize();
  await new TaskSeeder().run(AppDataSource);
  console.log('✅ User seeding complete');
}
seed();