import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "sales";

export class sale1655436383103 implements MigrationInterface {
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
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
          },
          {
            name: "nsu_old",
            type: "varchar(45)",
          },
          {
            name: "nsu_pinbank",
            type: "varchar(45)",
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "gateway_id",
            type: "integer",
          },
          {
            name: "payment_situation_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "payment_type_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "channel_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "stage_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "certificate_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "code_seller",
            type: "varchar",
          },
          {
            name: "pay",
            type: "varchar",
          },
          {
            name: "order_id",
            type: "integer",
            default: null,
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
            name: "gatewayId",
            columnNames: ["gateway_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "gateways",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "paymentSituationId",
            columnNames: ["payment_situation_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "payment_situations",
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
            name: "stageId",
            columnNames: ["stage_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "stages",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "certificateId",
            columnNames: ["certificate_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "certificates",
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
