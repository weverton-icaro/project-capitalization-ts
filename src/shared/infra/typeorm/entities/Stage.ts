import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Stage {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  amount: number;

  @Column({ unique: true, nullable: false })
  edition: number;

  @Column({ unique: true, nullable: false })
  number: number;

  @Column({ length: 100, unique: true, nullable: false })
  description: string;

  @Column({ length: 1000 })
  url_image: string;

  @Column({ length: 10, nullable: false })
  type: string;

  @Column()
  datetime_limit_sale: Date;

  @Column()
  datetime_lottery_start: Date;

  @Column({ default: false, nullable: false })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
