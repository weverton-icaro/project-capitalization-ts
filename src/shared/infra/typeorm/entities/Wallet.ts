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
export class Wallet {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 19, unique: true, nullable: false })
  card_number: string;

  @Column({ length: 36, unique: true, nullable: false })
  token: string;

  @Column({ nullable: false, default: 0 })
  attempt_failed: number;

  @Column({ nullable: false, default: 1 })
  status: number;

  @Column()
  clear_sale_code: number;

  @Column({ unsigned: true })
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
