import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693956037722 implements MigrationInterface {
    name = 'Default1693956037722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brands" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "idbrand" integer`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5" FOREIGN KEY ("idbrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "idbrand"`);
        await queryRunner.query(`DROP TABLE "brands"`);
    }

}
