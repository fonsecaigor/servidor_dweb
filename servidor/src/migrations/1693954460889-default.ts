import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693954460889 implements MigrationInterface {
    name = 'Default1693954460889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "gender"`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_gender_enum" AS ENUM('masculino', 'feminino', 'unissex')`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "gender" "public"."bikes_gender_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "gender" character varying(10) NOT NULL`);
    }

}
