import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class addColumConsiderationInOccurence1655437230325
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "occurences",
      new TableColumn({
        name: "consideration_id",
        type: "integer",
      })
    );

    const fk = new TableForeignKey({
      name: "considerationId",
      columnNames: ["consideration_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "considerations",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryRunner.createForeignKey("occurences", fk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("occurences", "considerationId");
    await queryRunner.dropColumn("occurences", "consideration_id");
  }
}
