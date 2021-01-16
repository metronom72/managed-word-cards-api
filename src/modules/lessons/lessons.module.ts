import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {LessonEntity} from '../../entities/lesson.entity';
import {GroupEntity} from '../../entities/group.entity';
import {WordEntity} from '../../entities/word.entity';
import {LessonsService} from '../../services/lessons/lessons.service';
import {LessonsController} from '../../controllers/lessons/lessons.controller';

@Module({
    imports: [TypeOrmModule.forFeature([LessonEntity  , GroupEntity, WordEntity])],
    providers: [LessonsService],
    controllers: [LessonsController],
    exports: [TypeOrmModule]
})
export class LessonsModule { }
