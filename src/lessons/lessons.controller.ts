import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {CreateLessonDto} from '../dtos/lesson.dto';

@Controller('lessons')
export class LessonsController {
    @Post('create')
    @HttpCode(204)
    async create(@Body() createLessonDto: CreateLessonDto) {
        console.log(createLessonDto);
    }
}
