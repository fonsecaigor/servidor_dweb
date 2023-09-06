import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693953773221 implements MigrationInterface {
    name = 'Default1693953773221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "alias" character varying(15) NOT NULL, "mail" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "UQ_f002c336d3299ee4eba00196902" UNIQUE ("alias"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bikes" ("id" SERIAL NOT NULL, "color" character varying(30) NOT NULL, "size" character varying(10) NOT NULL, "material" character varying(20) NOT NULL, "gender" character varying(10) NOT NULL, "speedkit" integer NOT NULL, "aro" character varying(10) NOT NULL, "suspensao" character varying(10) NOT NULL, "hourlyvalue" character varying(10) NOT NULL, "dailyvalue" character varying(10) NOT NULL, "description" character varying(10) NOT NULL, CONSTRAINT "PK_5237c1fcb162998a0d31e640814" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bikes"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
