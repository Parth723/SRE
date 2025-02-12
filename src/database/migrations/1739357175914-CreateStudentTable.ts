import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudentTable1739357175914 implements MigrationInterface {
    name = 'CreateStudentTable1739357175914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`class\` varchar(255) NOT NULL, \`division\` varchar(255) NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`students\``);
    }

}
