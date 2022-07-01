import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Stage } from "./Stage";

@Entity()
export class Award {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  order: number;

  @Column({ nullable: false })
  description: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: null })
  amount: number;

  @Column({ unsigned: true })
  stage_id: number;

  @Column({ length: 1000, default: null })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Stage)
  @JoinColumn({ name: "stage_id" })
  stageId: Stage;
}
