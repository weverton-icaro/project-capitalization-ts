import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "certificates";

export class certificate1655436268259 implements MigrationInterface {
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
            name: "sequence_certificate_1",
            type: "varchar(60)",
            isNullable: false,
          },
          {
            name: "sequence_certificate_2",
            type: "varchar(60)",
          },
          {
            name: "sequence_certificate_3",
            type: "varchar(60)",
          },
          {
            name: "code_certificate_1",
            type: "integer",
            isNullable: false,
          },
          {
            name: "code_certificate_2",
            type: "integer",
          },
          {
            name: "code_certificate_3",
            type: "integer",
          },
          {
            name: "active",
            type: "boolean",
            isNullable: false,
            default: true,
          },
          {
            name: "type",
            type: "varchar(8)",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TableName);
  }
}
