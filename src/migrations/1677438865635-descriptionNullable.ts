import { MigrationInterface, QueryRunner } from "typeorm";

export class descriptionNullable1677438865635 implements MigrationInterface {
    name = 'descriptionNullable1677438865635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying NOT NULL`);
    }

}
