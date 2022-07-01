import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "awards";

export class award1655436390660 implements MigrationInterface {
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
            name: "order",
            type: "integer",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "stage_id",
            type: "integer",
          },
          {
            name: "image",
            type: "varchar(1000)",
          },
          {
            name: "amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            default: "0.00",
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
