import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddChat1627366244512 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add existing chat
    await queryRunner.query(`
      INSERT INTO chat (user1_id, user2_id, last_message_id)
      VALUES (1, 2, null),
             (1, 3, null);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM chat`);
    await queryRunner.query(`ALTER TABLE chat AUTO_INCREMENT = 1`);
  }
}