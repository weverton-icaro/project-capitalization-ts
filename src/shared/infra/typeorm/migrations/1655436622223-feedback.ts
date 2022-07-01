import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "feedbacks";

export class feedback1655436622223 implements MigrationInterface {
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
            name: "message",
            type: "text",
            isNullable: false,
          },
          {
            name: "answed",
            type: "text",
            isNullable: false,
          },
          {
            name: "answed_at",
            type: "timestamp",
          },
          {
            name: "active",
            type: "boolean",
            isNullable: false,
            default: true,
          },
          {
            name: "priority",
            type: "varchar(25)",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "interger",
            isNullable: false,
          },
          {
            name: "category_id",
            type: "integer",
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
          {
            name: "categoryId",
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "category_feedbacks",
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
