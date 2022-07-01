import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "gateways";

export class gateway1655436249431 implements MigrationInterface {
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
            name: "soft_descriptor",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "amount",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "tid",
            type: "varchar(20)",
            isUnique: true,
          },
          {
            name: "proof_of_sale",
            type: "varchar(9)",
            isUnique: true,
          },
          {
            name: "authentication_url",
            type: "text",
          },
          {
            name: "payment_id",
            type: "varchar(36)",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "response",
            type: "text",
          },
          {
            name: "wallet_id",
            type: "integer",
          },
          {
            name: "payment_situation_id",
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
            name: "walletId",
            columnNames: ["wallet_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "wallets",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
