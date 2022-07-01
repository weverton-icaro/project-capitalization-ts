import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { BalanceStatement } from "./BalanceStatement";
import { Order } from "./Order";
import { PaymentType } from "./PaymentType";

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: null })
  card: string;

  @Column({ default: null })
  acquirer: string;

  @Column({ unique: true, default: null })
  acquirer_pay: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({ default: null })
  message: string;

  @Column({ unsigned: true, nullable: false })
  payment_type_id: number;

  @Column({ unique: true, nullable: false })
  order_id: number;

  @Column({ unsigned: true })
  balance_statement_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => PaymentType)
  @JoinColumn({ name: "paymente_type_id" })
  paymentType: PaymentType;

  @OneToOne(() => Order)
  @JoinColumn({ name: "order_id" })
  order: Order;

  @OneToOne(() => BalanceStatement)
  @JoinColumn({ name: "balance_statement_id" })
  balanceStatement: BalanceStatement;
}
