import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { AssignesModule } from './assignes/assignes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),TypeOrmModule.forRootAsync(typeOrmConfig), AuthModule,UserModule, TaskModule, AssignesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
