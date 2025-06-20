import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId!: string;

  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "text" })
  password!: string;

  @Column({ type: "varchar", length: 150 })
  fullName!: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  address?: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  phoneNumber?: string;

  @Column({ type: "nvarchar", length: 300, nullable: true })
  userUnsigned?: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  idCard?: string;

  @Column({ type: "varchar", length: 20, default: "active" })
  status!: string;

  @Column({ type: "uuid" })
  roleId!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  createdUser?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  updatedUser?: string;

  @CreateDateColumn({ type: "timestamp", name: "created_date" })
  createdDate!: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_date" })
  updatedDate!: Date;
}
