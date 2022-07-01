import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "permission_roles";

export class permissionRole1655437021042 implements MigrationInterface {
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
            isNullable: false,
          },
          {
            name: "permission_id",
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
            name: "roleId",
            columnNames: ["role_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "roles",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "permissionId",
            columnNames: ["permission_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "permissions",
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
