import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Role } from "./Role";
import { User } from "./Users";

@Entity()
export class RoleUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  role_id: number;

  @Column({ unsigned: true })
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role: Role;
}
