import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "./Users";

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  user_id: number;

  @Column({ unsigned: true })
  friend_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Friend)
  @JoinColumn({ name: "friend_id" })
  friend: Friend;
}
