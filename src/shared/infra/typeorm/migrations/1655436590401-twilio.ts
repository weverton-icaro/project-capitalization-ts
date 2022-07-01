import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "twilio";

export class twilio1655436590401 implements MigrationInterface {
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
            name: "type",
            type: "varchar(6)",
            isNullable: false,
          },
          {
            name: "message",
            type: "text",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar(14)",
          },
          {
            name: "code",
            type: "integer(7)",
            isNullable: false,
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
