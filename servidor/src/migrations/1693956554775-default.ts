import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693956554775 implements MigrationInterface {
    name = 'Default1693956554775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD "idcategory" integer`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3" FOREIGN KEY ("idcategory") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_0ba7ed606b8aaff2615de060bd3"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "idcategory"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
