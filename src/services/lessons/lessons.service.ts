import {Injectable} from '@nestjs/common';
import {Connection} from 'typeorm';
import {LessonEntity} from '../../entities/lesson.entity';
import {CreateLessonDto} from '../../dtos/lesson.dto';

@Injectable()
export class LessonsService {
    constructor (
        private connection: Connection,
    ) { }

    public async create (lessonDto: CreateLessonDto) {
        const lesson = LessonEntity.create(lessonDto);
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
