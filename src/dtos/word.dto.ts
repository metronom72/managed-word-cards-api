import {CommonDto, CreateCommonDto} from './common.dto';

export interface CreateWordDto extends CreateCommonDto {
    original: string;
    target: string;
    originalLanguage: string;
    targetLanguage: string;
}

export interface WordDto extends CommonDto {
    original: string;
    target: string;
    originalLanguage: string;
    targetLanguage: string;
}
