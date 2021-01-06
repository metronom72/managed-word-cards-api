import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {CreateLessonDto} from '../../dtos/lesson.dto';
import {LessonsService} from '../../services/lessons/lessons.service';
import {LessonEntity} from '../../models/lesson.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {RequestDto} from '../../dtos/common.dto';

@Controller('lessons')
export class LessonsController {
    constructor(private lessonsService: LessonsService) { }

    @Post('create')
    @HttpCode(204)
    async create(@Body() createLessonDto: RequestDto<CreateLessonDto>) {
        this.lessonsService.create(createLessonDto.data);
    }
}
