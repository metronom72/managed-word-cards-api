import {MigrationInterface, QueryRunner} from "typeorm";

export class init1609532457291 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Trigger
        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION trigger_set_timestamp()
            RETURNS TRIGGER AS $$
            BEGIN
              NEW.updated_at = NOW();
              RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
        `);

        // Create Lessons Table
        await queryRunner.query(`
            CREATE TABLE lessons (
                lesson_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                original_language TEXT NOT NULL,
                target_language TEXT NOT NULL,
                title TEXT NOT NULL,
                lesson_status TEXT NOT NULL DEFAULT 'draft',
                comment TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );`
        );
        // Apply Trigger for Lessons
        await queryRunner.query(`
            CREATE TRIGGER set_timestamp_lessons
            BEFORE UPDATE ON lessons
            FOR EACH ROW
            EXECUTE PROCEDURE trigger_set_timestamp();
        `);

        // Create Groups Table
        await queryRunner.query(`
            CREATE TABLE groups (
                group_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                title TEXT,
                comment TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                lesson_id INT NOT NULL,
                
                CONSTRAINT fkey_lesson 
                    FOREIGN KEY (lesson_id)
                        REFERENCES lessons (lesson_id)
                        ON DELETE CASCADE
            );
        `);
        // Apply Trigger for Groups
        await queryRunner.query(`
            CREATE TRIGGER set_timestamp_groups
            BEFORE UPDATE ON groups
            FOR EACH ROW
            EXECUTE PROCEDURE trigger_set_timestamp();
        `);

        // Create Words Table
        await queryRunner.query(`
            CREATE TABLE words (
                word_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                original_language TEXT NOT NULL,
                target_language TEXT NOT NULL,
                original TEXT NOT NULL,
                target TEXT NOT NULL,
                comment TEXT,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                group_id INT NOT NULL,
                
                CONSTRAINT fkey_group 
                    FOREIGN KEY (group_id)
                        REFERENCES groups (group_id)
                        ON DELETE CASCADE
            );
        `);
        // Apply Trigger for Words
        await queryRunner.query(`
            CREATE TRIGGER set_timestamp_words
            BEFORE UPDATE ON lessons
            FOR EACH ROW
            EXECUTE PROCEDURE trigger_set_timestamp();
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('words');
        await queryRunner.dropTable('groups');
        await queryRunner.dropTable('lessons');
    }

}
