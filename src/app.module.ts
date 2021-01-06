import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {configService} from './config/config.service';
import {LessonsModule} from './modules/lessons/lessons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    LessonsModule
  ],
})
export class AppModule {}
