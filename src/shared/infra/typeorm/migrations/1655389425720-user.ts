import { MigrationInterface, QueryRunner, Table } from "typeorm";

const TableName = "users";

export class CreateUsers1643393796200 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TableName,
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar(14)",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar(15)",
            isUnique: true,
          },
          {
            name: "birthday",
            type: "date",
            isNullable: false,
          },
          {
            name: "sex",
            type: "varchar(9)",
            isNullable: true,
          },
          {
            name: "group_user_id",
            type: "integer",
          },
          {
            name: "address_id",
            type: "integer",
          },
          {
            name: "active",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "blocked",
            type: "boolean",
            default: false,
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
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "groupUsersId",
            columnNames: ["group_user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "group_users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "addressId",
            columnNames: ["address_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "addresses",
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
