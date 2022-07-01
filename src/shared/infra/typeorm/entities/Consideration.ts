import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Occurence } from "./Occurence";
import { User } from "./Users";

@Entity()
export class Consideration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, default: false })
  solved: boolean;

  @Column({ length: 1000 })
  message: string;

  @Column({ length: 2 })
  score: string;

  @Column({ unsigned: true, nullable: false })
  user_id: number;

  @Column({ unsigned: true, nullable: false })
  occurence_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Occurence)
  @JoinColumn({ name: "occurence_id" })
  occurence: Occurence;
}
