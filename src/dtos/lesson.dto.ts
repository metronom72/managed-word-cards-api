import {CreateGroupDto} from './group.dto';
import {CommonDto, CreateCommonDto} from './common.dto';
import {StatusEnum} from '../shared/constants';

export interface CreateLessonDto extends CreateCommonDto {
    originalLanguage: string;
    targetLanguage: string;
    title: string;
    groups: CreateGroupDto[];
    status: StatusEnum;
}

export interface LessonDto extends CommonDto {
    originalLanguage: string;
    targetLanguage: string;
    title: string;
    groups: CreateGroupDto[];
    status: StatusEnum;
}
