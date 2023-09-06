import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693957356753 implements MigrationInterface {
    name = 'Default1693957356753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photos" ("id" SERIAL NOT NULL, "filename" character varying(100) NOT NULL, "bikeId" integer, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758" FOREIGN KEY ("bikeId") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758"`);
        await queryRunner.query(`DROP TABLE "photos"`);
    }

}
