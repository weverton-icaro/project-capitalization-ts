import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "addresses";

export class CreateAddress1644413133502 implements MigrationInterface {
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
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "number",
            type: "varchar(11)",
            isNullable: false,
          },
          {
            name: "cep",
            type: "varchar(9)",
            isNullable: false,
          },
          {
            name: "city(40)",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "uf",
            type: "varchar(2)",
            isNullable: true,
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
