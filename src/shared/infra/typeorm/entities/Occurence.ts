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
import { Consideration } from "./Consideration";
import { User } from "./Users";

@Entity()
export class Occurence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ length: 25, nullable: false })
  priority: string;

  @Column({ nullable: false })
  title: string;

  @Column({ unsigned: true, nullable: false })
  category_id: number;

  @Column({ length: 1000 })
  message: string;

  @Column({ default: false })
  closed: boolean;

  @Column()
  image_1: string;

  @Column()
  image_2: string;

  @Column({ length: 1000 })
  image_url_1: string;

  @Column({ length: 1000 })
  image_url_2: string;

  @Column({ unsigned: true, nullable: true })
  user_id: number;

  @Column({ unsigned: true, default: null })
  consideration_id: number;

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

  @OneToOne(() => Consideration)
  @JoinColumn({ name: "consideration_id" })
  consideration: Consideration;
}
