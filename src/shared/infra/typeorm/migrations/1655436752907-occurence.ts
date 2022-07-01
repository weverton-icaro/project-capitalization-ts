import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "occurences";

export class occurence1655436752907 implements MigrationInterface {
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
            name: "status",
            type: "varchar",
          },
          {
            name: "priority",
            type: "varchar(25)",
            isNullable: false,
          },
          {
            name: "title",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "category_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "message",
            type: "varchar(1000)",
          },
          {
            name: "closed",
            type: "boolean",
            default: false,
          },
          {
            name: "image_1",
            type: "varchar",
          },
          {
            name: "image_2",
            type: "varchar",
          },
          {
            name: "image_url_1",
            type: "varchar(1000)",
          },
          {
            name: "image_url_2",
            type: "varchar(1000)",
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
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
            referencedTableName: "category_feed_backs",
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
