import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "orders";

export class order1655436330578 implements MigrationInterface {
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
            name: "amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
          },
          {
            name: "quantity",
            type: "integer",
            default: "1",
          },
          {
            name: "tickets",
            type: "text",
          },
          {
            name: "stage_id",
            type: "integer",
          },
          {
            name: "status_id",
            type: "integer",
          },
          {
            name: "type_order_id",
            type: "integer",
          },
          {
            name: "channel_id",
            type: "integer",
          },
          {
            name: "user_owner_id",
            type: "integer",
          },
          {
            name: "user_payer_id",
            type: "integer",
          },
          {
            name: "user_dash_id",
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
            name: "stageId",
            columnNames: ["stage_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "stages",
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
          {
            name: "typeOrderId",
            columnNames: ["type_order_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "type_orders",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "channelId",
            columnNames: ["channel_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "channels",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "userOwnerId",
            columnNames: ["user_owner_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "userPayerId",
            columnNames: ["user_payer_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "usersDashId",
            columnNames: ["user_dash_id"],
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
