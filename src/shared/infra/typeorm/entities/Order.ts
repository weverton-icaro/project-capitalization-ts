import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Channel } from "./Channel";
import { Payment } from "./Payment";
import { Stage } from "./Stage";
import { Status } from "./Status";
import { TypeOrders } from "./TypeOrders";
import { User } from "./Users";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  amount: number;

  @Column({ default: 1 })
  quantity: number;

  @Column()
  tickets: string;

  @Column({ unsigned: true, nullable: false })
  stage_id: number;

  @Column({ unsigned: true, nullable: false })
  status_id: number;

  @Column({ unsigned: true, nullable: false })
  type_order_id: number;

  @Column({ unsigned: true, nullable: false })
  channel_id: number;

  @Column({ unsigned: true, nullable: false })
  user_owner_id: number;

  @Column({ unsigned: true, nullable: false })
  user_payer_id: number;

  @Column({ unsigned: true, nullable: false })
  user_dash_id: number;

  @Column({ unsigned: true, nullable: false })
  payment_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Stage)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;

  @OneToOne(() => Status)
  @JoinColumn({ name: "status_id" })
  statusId: Status;

  @OneToOne(() => TypeOrders)
  @JoinColumn({ name: "type_order_id" })
  typeOrderId: TypeOrders;

  @OneToOne(() => Channel)
  @JoinColumn({ name: "channel_id" })
  channelId: Channel;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_owner_id" })
  userOwner: User;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_owner_id" })
  userPayer: User;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_owner_id" })
  userDash: User;

  @OneToOne(() => Payment)
  @JoinColumn({ name: "payment_id" })
  paymentId: Payment;
}
