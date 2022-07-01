import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "permissions";

export class permission1655436960536 implements MigrationInterface {
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
            name: "slug",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "description",
            type: "text",
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
