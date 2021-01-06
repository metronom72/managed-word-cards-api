import {BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {StatusEnum} from '../shared/constants';
import {GroupEntity} from './group.entity';

@Entity({name: 'lessons'})
export class LessonEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'lesson_id'
    })
    lessonId: number;

    @Column({
        name: 'original_language'
    })
    originalLanguage: string;

    @Column({
        name: 'target_language'
    })
    targetLanguage: string;

    @Column({
        name: 'title'
    })
    title: string;

    @Column({
        name: 'lesson_status'
    })
    lessonStatus: StatusEnum;

    @Column({
        nullable: true,
        name: 'comment'
    })
    comment: string;

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

    // @OneToMany(() => GroupEntity, group => group.lesson, {
    //     cascade: true,
    //     eager: true,
    // })
    // groups: GroupEntity[];
}
