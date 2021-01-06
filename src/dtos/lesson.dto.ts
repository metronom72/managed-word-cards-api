import {CreateGroupDto} from './group.dto';
import {CommonDto, CreateCommonDto} from './common.dto';
import {StatusEnum} from '../shared/constants';
import {IsEnum, IsNotEmpty} from 'class-validator';

export class CreateLessonDto extends CreateCommonDto {
    @IsNotEmpty()
    originalLanguage: string;

    @IsNotEmpty()
    targetLanguage: string;

    @IsNotEmpty()
    title: string;

    // @IsNotEmpty()
    // groups: CreateGroupDto[];

    @IsEnum(StatusEnum)
    @IsNotEmpty()
    lessonStatus: StatusEnum;
}

export class LessonDto extends CommonDto {
    @IsNotEmpty()
    originalLanguage: string;

    @IsNotEmpty()
    targetLanguage: string;

    @IsNotEmpty()
    title: string;

    // @IsNotEmpty()
    // groups: CreateGroupDto[];

    @IsEnum(StatusEnum)
    @IsNotEmpty()
    lessonStatus: StatusEnum;
}
