import { Module } from '@nestjs/common';
import { AssignesService } from './assignes.service';
import { AssignesController } from './assignes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assigne } from './entities/assigne.entity';
import { UserModule } from 'src/user/user.module';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports:[TypeOrmModule.forFeature([Assigne]),UserModule,TaskModule],
  controllers: [AssignesController],
  providers: [AssignesService],
})
export class AssignesModule {}
