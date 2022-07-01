import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Sale } from "./Sale";
import { TypeLogSale } from "./TypeLogSale";
import { User } from "./Users";

@Entity()
export class LogSales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  response_webview: string;

  @Column()
  response_mercado_pago_frontend: string;

  @Column()
  response_mercado_pago_backend: string;

  @Column({ unsigned: true, nullable: false })
  user_id: number;

  @Column({ unsigned: true, nullable: false })
  sale_id: number;

  @Column({ unsigned: true, nullable: false })
  type_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // FK

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Sale)
  @JoinColumn({ name: "sale_id" })
  sale: Sale;

  @OneToOne(() => TypeLogSale)
  @JoinColumn({ name: "type_id" })
  type: TypeLogSale;
}
