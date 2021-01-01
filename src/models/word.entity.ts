import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Group} from './group.entity';

@Entity()
export class Word {
    @PrimaryGeneratedColumn()
    wordId: number;

    @Column()
    originalLanguage: string;

    @Column()
    targetLanguage: string;

    @Column()
    original: string;

    @Column()
    target: string;

    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Group, group => group.words)
    group: Group;
}
