import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Permission } from "./Permission";
import { User } from "./Users";

@Entity()
export class PermissionUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  user_id: number;

  @Column({ unsigned: true })
  permission_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Permission)
  @JoinColumn({ name: "permission_id" })
  permission: Permission;
}
