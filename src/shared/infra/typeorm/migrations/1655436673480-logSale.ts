import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "log_sales";

export class logSale1655436673480 implements MigrationInterface {
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
            name: "response_webview",
            type: "text",
          },
          {
            name: "response_mercado_pago_frontend",
            type: "text",
          },
          {
            name: "response_mercado_pago_backend",
            type: "text",
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "sale_id",
            type: "integer",
          },
          {
            name: "type_id",
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
            name: "saleId",
            columnNames: ["sale_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "sales",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "typeId",
            columnNames: ["type_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "type_log_sales",
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
