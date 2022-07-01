import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { CategoryFeedback } from "./CategoryFeedback";
import { User } from "./Users";

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  message: string;

  @Column({ nullable: false })
  answed: string;

  @Column()
  answed_at: Date;

  @Column({ nullable: false, default: true })
  active: boolean;

  @Column({ length: 12, nullable: false })
  priority: string;

  @Column({ unsigned: true, nullable: false })
  user_id: number;

  @Column({ unsigned: true, nullable: false })
  category_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => CategoryFeedback)
  @JoinColumn({ name: "category_id" })
  category: CategoryFeedback;
}
