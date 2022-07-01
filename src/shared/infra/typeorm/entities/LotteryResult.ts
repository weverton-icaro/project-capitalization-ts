import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Award } from "./Award";
import { Stage } from "./Stage";

@Entity()
export class LotteryResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  drawn_number: string;

  @Column({ nullable: false, unsigned: true })
  stage_id: number;

  @Column({ nullable: false, unsigned: true })
  award_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Stage)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;

  @OneToOne(() => Award)
  @JoinColumn({ name: "award_id" })
  award: Award;
}
