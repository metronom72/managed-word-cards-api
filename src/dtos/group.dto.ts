import {CreateWordDto} from './word.dto';
import {CommonDto, CreateCommonDto} from './common.dto';

export interface CreateGroupDto extends CreateCommonDto {
    words: CreateWordDto[];
    title: string;
}

export interface GroupDto extends CommonDto {
    words: CreateWordDto[];
    title: string;
}
