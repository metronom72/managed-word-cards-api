import {BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {GroupEntity} from './group.entity';

@Entity({name: 'words'})
export class WordEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'word_id'
    })
    wordId: number;

    @Column({
        name: 'original_language'
    })
    originalLanguage: string;

    @Column({
        name: 'target_language'
    })
    targetLanguage: string;

    @Column({
        name: 'original'
    })
    original: string;

    @Column({
        name: 'target'
    })
    target: string;

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

    // @ManyToOne(() => GroupEntity, group => group.words, {
    //     cascade: false,
    //     eager: false,
    // })
    // @JoinColumn({
    //     name: 'group_id'
    // })
    // group: GroupEntity;
}
