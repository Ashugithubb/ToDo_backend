import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/task/entities/task.entity';



export default class TaskSeeder implements Seeder {
    async run(dataSource: DataSource): Promise<void> {
        const taskRepo = dataSource.getRepository(Task);

        const tasks: Task[] = [];

        for (let i = 0; i < 30; i++) {

            tasks.push(
                taskRepo.create({
                    title: faker.person.firstName(), // Generates a random first name
                    description: faker.lorem.sentence(), // Generates a random sentence
                    startTime: faker.date.future(), 
                    endTime: faker.date.future({ refDate: new Date(Date.now() + 1000 * 60 * 60) }), // Another future date after startTime
                }),
            );
        }

        await taskRepo.save(tasks);
        console.log('✅ 20 task seeded.');
    }
}