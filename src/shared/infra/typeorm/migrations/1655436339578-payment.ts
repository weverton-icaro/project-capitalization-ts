import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "payments";

export class payment1655436339578 implements MigrationInterface {
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
            name: "card",
            type: "text",
          },
          {
            name: "acquirer",
            type: "varchar(45)",
          },
          {
            name: "acquirer_pay",
            type: "varchar",
            isUnique: true,
            default: null,
          },
          {
            name: "amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
          },
          {
            name: "message",
            type: "varchar",
            default: null,
          },
          {
            name: "payment_type_id",
            type: "integer",
            unsigned: true,
          },
          {
            name: "order_id",
            type: "integer",
            unsigned: true,
          },
          {
            name: "balance_statement_id",
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
            name: "paymentTypeId",
            columnNames: ["payment_type_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "payment_types",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "orderId",
            columnNames: ["order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "balanceStatementId",
            columnNames: ["balance_statement_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "balance_statements",
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
