import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("payment_situations")
export class PaymentSituations {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  message: string;

  @Column({ length: 100 })
  status_detail: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
