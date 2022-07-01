import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Certificate } from "./Certificate";
import { Channel } from "./Channel";
import { Gateway } from "./Gateway";
import { Order } from "./Order";
import { PaymentSituations } from "./PaymentSituations";
import { PaymentType } from "./PaymentType";
import { Stage } from "./Stage";
import { User } from "./Users";

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  description: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({ unsigned: true, nullable: false })
  user_id: string;

  @Column({ unsigned: true })
  gateway_id: number;

  @Column({ unsigned: true, nullable: false })
  payment_situation_id: number;

  @Column({ unsigned: true })
  payment_type_id: number;

  @Column({ unsigned: true, nullable: false })
  channel_id: number;

  @Column({ unsigned: true, nullable: false })
  stage_id: number;

  @Column({ unique: true })
  certificate_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ length: 45, default: null })
  nsu_old: string;

  @Column({ length: 45, default: null })
  nsu_pinbank: string;

  @Column({ default: null })
  code_saller: string;

  @Column({ default: null })
  pay: string;

  @Column({ unique: true })
  order_id: number;

  // FOREIGN KEYS

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Gateway)
  @JoinColumn({ name: "gateway_id" })
  gatewayId: Gateway;

  @OneToOne(() => PaymentSituations)
  @JoinColumn({ name: "payment_situation_id" })
  paymentSituationId: PaymentSituations;

  @OneToOne(() => PaymentType)
  @JoinColumn({ name: "payment_type_id" })
  paymentTypeId: PaymentType;

  @OneToOne(() => Channel)
  @JoinColumn({ name: "channel_id" })
  channelId: Channel;

  @OneToOne(() => Stage)
  @JoinColumn({ name: "stage_id" })
  stageId: Stage;

  @OneToOne(() => Certificate)
  @JoinColumn({ name: "certificate_id" })
  certificateId: Certificate;

  @OneToOne(() => Order)
  @JoinColumn({ name: "order_id" })
  orderId: Order;
}
