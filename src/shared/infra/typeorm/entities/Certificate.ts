import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Certificate {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 60, nullable: false })
  sequence_certificate_1: string;

  @Column({ length: 60 })
  sequence_certificate_2: string;

  @Column({ length: 60 })
  sequence_certificate_3: string;

  @Column({ nullable: false })
  code_certificate_1: string;

  @Column()
  code_certificate_2: string;

  @Column()
  code_certificate_3: string;

  @Column({ length: 8, nullable: false })
  type: string;

  @Column({ nullable: false, default: true })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
