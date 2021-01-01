import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {StatusEnum} from '../shared/constants';
import {Group} from './group.entity';

@Entity()
export class Lesson {
    @PrimaryGeneratedColumn()
    lessonId: number;

    @Column()
    originalLanguage: string;

    @Column()
    targetLanguage: string;

    @Column()
    lessonStatus: StatusEnum;

    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Group, group => group.lesson)
    groups: Group[];
}
