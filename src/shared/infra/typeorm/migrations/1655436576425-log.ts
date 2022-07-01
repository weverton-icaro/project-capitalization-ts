import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "logs";

export class log1655436576425 implements MigrationInterface {
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
            name: "session",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "ip",
            type: "varchar(15)",
            isNullable: false,
          },
          {
            name: "user_id",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
