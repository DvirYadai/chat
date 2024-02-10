import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUser1627366244506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add a new user in the 'up' migration
    await queryRunner.query(`
      INSERT INTO user (username, email, password_hash, created_at) 
      VALUES ('Dvir Yadai', 'dvir195@gmail.com', '$2b$10$78LBrtgRBb2sLPC0mDuQweR/xO1P3kKPdxzUAMbiEV1dE3Y4q8Vym', CURRENT_TIMESTAMP),
             ('John Cohen', 'john195@gmail.com', '$2b$10$78LBrtgRBb2sLPC0mDuQweR/xO1P3kKPdxzUAMbiEV1dE3Y4q8Vym', CURRENT_TIMESTAMP),
             ('Tal Langzam', 'tal195@gmail.com', '$2b$10$78LBrtgRBb2sLPC0mDuQweR/xO1P3kKPdxzUAMbiEV1dE3Y4q8Vym', CURRENT_TIMESTAMP);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove all users in the 'down' migration
    await queryRunner.query(`DELETE FROM user`);
    await queryRunner.query(`ALTER TABLE user AUTO_INCREMENT = 1`);
  }
}