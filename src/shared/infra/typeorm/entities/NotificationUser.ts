import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Notification } from "./Notification";
import { User } from "./Users";

@Entity()
export class NotificationUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false, nullable: false })
  read: boolean;

  @Column({ unsigned: true })
  user_id: number;

  @Column({ unsigned: true })
  notification_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Notification)
  @JoinColumn({ name: "notification_id" })
  notification: Notification;
}
