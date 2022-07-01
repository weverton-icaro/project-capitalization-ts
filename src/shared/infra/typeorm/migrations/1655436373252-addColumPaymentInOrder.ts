import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class addColumPaymentInOrder1655436373252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "orders",
      new TableColumn({
        name: "payment_id",
        type: "integer",
        isNullable: true,
        unsigned: true,
      })
    );

    const fk = new TableForeignKey({
      name: "paymentId",
      columnNames: ["payment_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "payments",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    await queryRunner.createForeignKey("orders", fk);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("orders", "paymentId");
    await queryRunner.dropColumn("orders", "payment_id");
  }
}
