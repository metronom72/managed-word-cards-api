import { Injectable } from '@nestjs/common';
import {Connection} from 'typeorm';
import {LessonEntity} from '../../models/lesson.entity';
import {CreateLessonDto} from '../../dtos/lesson.dto';

@Injectable()
export class LessonsService {
    constructor (
        private connection: Connection,
    ) { }

    public async create (lessonDto: CreateLessonDto) {
        console.log(lessonDto);
        const lesson = LessonEntity.create(lessonDto);
        console.log(lesson);
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(lesson);

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
            console.log(err);
        } finally {
            await queryRunner.release();
        }
    }
}
