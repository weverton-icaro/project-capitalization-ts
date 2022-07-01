import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Address } from "./Address";
import { Group } from "./GroupUsers";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ length: 14, nullable: false, unique: true })
  cpf: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  birth_date: Date;

  @Column({ length: 60, nullable: false })
  password: string;

  @Column({ length: 15, unique: true, nullable: false })
  phone: string;

  @Column({ length: 9, nullable: false })
  sex: string;

  @Column({ default: true, nullable: false })
  active: boolean;

  @Column({ default: false, nullable: false })
  blocked: boolean;

  @Column({ default: null })
  term_of_acceptance: boolean;

  @Column()
  token: string;

  @Column()
  token_created_at: Date;

  @Column({ nullable: false, default: 0 })
  deleted_wallet_at: number;

  @Column({ unsigned: true, default: null })
  group_user_id: number;

  @Column({ unsigned: true, default: null })
  address_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => Address)
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToOne(() => Group)
  @JoinColumn({ name: "group_user_id" })
  group: Group;
}
