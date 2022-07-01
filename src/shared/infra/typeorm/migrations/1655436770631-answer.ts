import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "answers";

export class answer1655436770631 implements MigrationInterface {
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
            type: "varchar(1000)",
          },
          {
            name: "read",
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
            name: "user_owner_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "occurence_id",
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
            name: "userOwnerId",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "occurenceId",
            columnNames: ["occurence_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "occurences",
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
