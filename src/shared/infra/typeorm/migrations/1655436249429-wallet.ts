import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "wallets";

export class wallet1655517742007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TableName,
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "card_number",
            type: "varchar(19)",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "token",
            type: "varchar(36)",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "attempt_failed",
            type: "integer",
            isNullable: false,
            default: 0,
          },
          {
            name: "status",
            type: "integer",
            isNullable: false,
            default: 1,
          },
          {
            name: "clear_sale_code",
            type: "integer",
          },
          {
            name: "user_id",
            type: "integer",
            unsigned: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
          },
        ],
        foreignKeys: [
          {
            name: "userId",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
