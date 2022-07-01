import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "lottery_results";

export class lotteryResult1655436400688 implements MigrationInterface {
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
            name: "drawn_number",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "stage_id",
            type: "integer",
            isNullable: false,
          },
          {
            name: "award_id",
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
            name: "stageId",
            columnNames: ["stage_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "stages",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "awardId",
            columnNames: ["award_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "awards",
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
