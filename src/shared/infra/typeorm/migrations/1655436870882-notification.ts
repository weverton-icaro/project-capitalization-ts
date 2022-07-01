import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "notifications";

export class notification1655436870882 implements MigrationInterface {
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
            name: "title",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "message",
            type: "varchar(1000)",
            isNullable: false,
          },
          {
            name: "type",
            type: "varchar(45)",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
