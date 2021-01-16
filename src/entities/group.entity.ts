import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {WordEntity} from './word.entity';
import {LessonEntity} from './lesson.entity';

@Entity({name: 'groups'})
export class GroupEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'group_id'
    })
    groupId: number;

    @Column({
        name: 'title'
    })
    title: string;

    @Column({
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

    @OneToMany(() => WordEntity, word => word.group, {
        cascade: true,
        eager: true,
    })
    @JoinColumn({
        name: 'word_id'
    })
    words: WordEntity[];

    @ManyToOne(() => LessonEntity, lesson => lesson.groups, {
        cascade: false,
        eager: false,
    })
    @JoinColumn({
        name: 'lesson_id'
    })
    lesson: LessonEntity
}
