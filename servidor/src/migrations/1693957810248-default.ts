import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693957810248 implements MigrationInterface {
    name = 'Default1693957810248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" ADD "iduser" integer`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_095587c4402c257f1333bd0f74a" FOREIGN KEY ("iduser") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_095587c4402c257f1333bd0f74a"`);
        await queryRunner.query(`ALTER TABLE "bikes" DROP COLUMN "iduser"`);
    }

}
