import {CommonDto, CreateCommonDto} from './common.dto';
import {IsNotEmpty} from 'class-validator';

export class CreateWordDto extends CreateCommonDto {
    @IsNotEmpty()
    original: string;

    @IsNotEmpty()
    target: string;

    @IsNotEmpty()
    originalLanguage: string;

    @IsNotEmpty()
    targetLanguage: string;
}

export class WordDto extends CommonDto {
    @IsNotEmpty()
    original: string;


    @IsNotEmpty()
    target: string;


    @IsNotEmpty()
    originalLanguage: string;


    @IsNotEmpty()
    targetLanguage: string;
}
