import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693957576977 implements MigrationInterface {
    name = 'Default1693957576977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758"`);
        await queryRunner.query(`ALTER TABLE "photos" RENAME COLUMN "bikeId" TO "idbike"`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a" FOREIGN KEY ("idbike") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_c8600b91d8a0fae46ff891e257a"`);
        await queryRunner.query(`ALTER TABLE "photos" RENAME COLUMN "idbike" TO "bikeId"`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_e72de6200ed1d891ff2a70fc758" FOREIGN KEY ("bikeId") REFERENCES "bikes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
