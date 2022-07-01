import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Sale } from "./Sale";
import { User } from "./Users";

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  user_id: number;

  @Column({ unsigned: true })
  sale_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Sale)
  @JoinColumn({ name: "sale_id" })
  sale: Sale;
}
