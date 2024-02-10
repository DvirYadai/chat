import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddMessages1627366244532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO message (chat_id, group_id, sender_id, message_content, timestamp)
      VALUES
        (1, null, 1, 'Hello', CURRENT_TIMESTAMP),
        (1, null, 2, 'Hi there!', CURRENT_TIMESTAMP),
        (1, null, 1, 'How are you?', CURRENT_TIMESTAMP),
        (2, null, 1, 'Hello', CURRENT_TIMESTAMP),
        (2, null, 3, 'Hi there!', CURRENT_TIMESTAMP),
        (2, null, 1, 'How are you?', CURRENT_TIMESTAMP);
    `);

    await queryRunner.query(`
      UPDATE chat SET last_message_id = (SELECT MAX(id) FROM message WHERE chat_id = 1) WHERE id = 1;
    `);
    await queryRunner.query(`
      UPDATE chat SET last_message_id = (SELECT MAX(id) FROM message WHERE chat_id = 2) WHERE id = 2;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM message`);
    await queryRunner.query(`ALTER TABLE message AUTO_INCREMENT = 1`);
  }
}