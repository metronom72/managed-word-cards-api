import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Word} from './word.entity';
import {Lesson} from './lesson.entity';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    groupId: number;

    @Column()
    title: string;

    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Word, word => word.group)
    words: Word[];

    @ManyToOne(() => Lesson, lesson => lesson.groups)
    lesson: Lesson
}
