import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "balance_statements";

export class balanceStatement1655436840276 implements MigrationInterface {
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
            name: "incoming",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
            isNullable: false,
          },
          {
            name: "outgoing",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "balance_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "order_id",
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
            name: "balanceId",
            columnNames: ["balance_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "balances",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
