import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "transactions";

export class transaction1655437040640 implements MigrationInterface {
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
            name: "acquirer",
            type: "varchar(45)",
            isNullable: false,
          },
          {
            name: "request",
            type: "text",
          },
          {
            name: "response",
            type: "text",
          },
          {
            name: "url",
            type: "varchar",
          },
          {
            name: "acquirer_pay",
            type: "varchar",
          },
          {
            name: "code_reference",
            type: "varchar",
          },
          {
            name: "payment_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "status_id",
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
            name: "paymentId",
            columnNames: ["payment_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "payments",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "statusId",
            columnNames: ["status_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "statuses",
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
