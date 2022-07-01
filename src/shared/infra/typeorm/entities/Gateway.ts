import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { PaymentSituations } from "./PaymentSituations";
import { Wallet } from "./Wallet";

@Entity()
export class Gateway {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100, nullable: false })
  soft_descriptor: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount: number;

  @Column({ length: 20, unique: true })
  tid: string;

  @Column({ length: 9, unique: true })
  proof_of_sale: string;

  @Column()
  authentication_url: string;

  @Column({ length: 36, unique: true, nullable: false })
  payment_id: string;

  @Column()
  response: string;

  @Column({ unsigned: true })
  wallet_id: number;

  @OneToOne(() => Wallet)
  @JoinColumn({ name: "wallet_id" })
  wallet: Wallet;

  @Column({ unsigned: true, nullable: false })
  payment_situation_id: number;

  @OneToOne(() => PaymentSituations)
  @JoinColumn({ name: "payment_situation_id" })
  paymentSituation: PaymentSituations;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
