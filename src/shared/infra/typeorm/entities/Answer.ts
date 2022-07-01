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
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 1000 })
  message: string;

  @Column({ default: false })
  read: boolean;

  @Column()
  image_1: string;

  @Column()
  image_2: string;

  @Column({ length: 1000 })
  image_url_1: string;

  @Column({ length: 10000 })
  image_url_2: string;

  @Column({ unsigned: true, nullable: false })
  user_id: number;

  @Column({ unsigned: true, nullable: false })
  user_owner_id: number;

  @Column({ unsigned: true, nullable: false })
  occurence_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: User;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_owner_id" })
  userOwner: User;

  @OneToOne(() => Occurence)
  @JoinColumn({ name: "occurence_id" })
  occurence: Occurence;
}
