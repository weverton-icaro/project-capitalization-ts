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
import { Role } from "./Role";

@Entity()
export class PermissionRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unsigned: true })
  role_id: number;

  @Column({ unsigned: true })
  permission_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @OneToOne(() => Permission)
  @JoinColumn({ name: "permission_id" })
  permission: Permission;
}
