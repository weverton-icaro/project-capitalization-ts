import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "stages";

export class stage1655436273907 implements MigrationInterface {
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
            isNullable: false,
          },
          {
            name: "edition",
            type: "integer",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "number",
            type: "integer",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar(100)",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "url_image",
            type: "varchar(1000)",
          },
          {
            name: "type",
            type: "varchar(10)",
            isNullable: false,
          },
          {
            name: "datetime_limit_sale",
            type: "timestamp",
          },
          {
            name: "datetime_lottery_start",
            type: "timestamp",
          },
          {
            name: "active",
            type: "boolean",
            isNullable: false,
            default: false,
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
