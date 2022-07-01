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

@Entity("tokens")
export class Tokens {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unsigned: true })
  user_id: string;

  @Column()
  token: string;

  @Column({ length: 80, nullable: false })
  type: string;

  @Column({ default: false })
  is_revoked: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
