import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "considerations";

export class consideration1655436806264 implements MigrationInterface {
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
            name: "solved",
            type: "boolean",
            isNullable: false,
            default: false,
          },
          {
            name: "message",
            type: "varchar(1000)",
          },
          {
            name: "score",
            type: "varchar(2)",
          },
          {
            name: "user_id",
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
