import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  complement: string;

  @Column({ length: 11, nullable: false })
  number: string;

  @Column({ length: 9, nullable: false })
  cep: string;

  @Column({ length: 2 })
  uf: string;

  @Column()
  city: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
