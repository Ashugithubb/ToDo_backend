import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedManyTables1753893947860 implements MigrationInterface {
    name = 'AddedManyTables1753893947860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignes" ADD "ceeck" character varying NOT NULL DEFAULT 'abc'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignes" DROP COLUMN "ceeck"`);
    }

}
