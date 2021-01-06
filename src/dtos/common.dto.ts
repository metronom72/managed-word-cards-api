import {IsDateString, IsNotEmpty, IsNumber} from 'class-validator';

export class CreateCommonDto {
    comment?: string;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
}

export class CommonDto {
    comment?: string;

    @IsNumber()
    id: string;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}

export class RequestDto<T> {
    @IsNotEmpty()
    data: T
}
