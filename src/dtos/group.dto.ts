import {CreateWordDto} from './word.dto';
import {CommonDto, CreateCommonDto} from './common.dto';
import {IsNotEmpty} from 'class-validator';

export class CreateGroupDto extends CreateCommonDto {
    @IsNotEmpty()
    words: CreateWordDto[];

    @IsNotEmpty()
    title: string;
}

export class GroupDto extends CommonDto {
    @IsNotEmpty()
    words: CreateWordDto[];

    @IsNotEmpty()
    title: string;
}
