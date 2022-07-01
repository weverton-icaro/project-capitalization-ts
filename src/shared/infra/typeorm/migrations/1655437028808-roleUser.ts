import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "role_users";

export class roleUser1655437028808 implements MigrationInterface {
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
            name: "role_id",
            type: "integer",
          },
          {
            name: "user_id",
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
            name: "roleId",
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "userId",
            columnNames: ["user_id"],
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
