import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Payment } from "./Payment";
import { Status } from "./Status";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 45 })
  acquirer: string;

  @Column()
  request: string;

  @Column()
  response: string;

  @Column()
  url: string;

  @Column()
  acquirer_pay: string;

  @Column()
  code_reference: string;

  @Column({ unsigned: true, nullable: false })
  payment_id: number;

  @Column({ unsigned: true, nullable: false })
  status_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Payment)
  @JoinColumn({ name: "payment_id" })
  payment: Payment;

  @OneToOne(() => Status)
  @JoinColumn({ name: "status_id" })
  status: Status;
}
