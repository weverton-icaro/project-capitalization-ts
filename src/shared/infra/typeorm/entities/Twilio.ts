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
export class Twilio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6, nullable: false })
  type: string;

  @Column({ nullable: false })
  message: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ nullable: false })
  code: number;

  @Column({ unsigned: true, nullable: false })
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
