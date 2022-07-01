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
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  session: string;

  @Column({ length: 15, nullable: false })
  ip: string;

  @Column({ unsigned: true })
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
