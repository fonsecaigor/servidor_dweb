import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693958940618 implements MigrationInterface {
    name = 'Default1693958940618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rents" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "ownerevaluation" integer NOT NULL, "clientevaluation" integer, "idbike" integer, "iduser" integer, CONSTRAINT "PK_43a9961f1448a8d75f9b25156ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_d52f379295e0bf7b349860737c3" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_8be6a0cefba50f9584f81db1820" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_8be6a0cefba50f9584f81db1820"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_d52f379295e0bf7b349860737c3"`);
        await queryRunner.query(`DROP TABLE "rents"`);
    }

}
