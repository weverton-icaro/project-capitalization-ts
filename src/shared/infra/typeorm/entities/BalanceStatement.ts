import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Balance } from "./Balance";
import { Order } from "./Order";

@Entity()
export class BalanceStatement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    default: "0.00",
    nullable: false,
  })
  incoming: number;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    default: "0.00",
    nullable: false,
  })
  outgoing: number;

  @Column({ nullable: false })
  description: string;

  @Column({ unsigned: true, nullable: false })
  balance_id: number;

  @Column({ unsigned: true, nullable: false })
  order_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Balance)
  @JoinColumn({ name: "balance_id" })
  balance: Balance;

  @OneToOne(() => Order)
  @JoinColumn({ name: "order_id" })
  order: Order;
}
