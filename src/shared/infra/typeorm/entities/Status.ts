import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("statuses")
export class Status {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 45, unique: true, nullable: false })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
