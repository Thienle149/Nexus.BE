import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseModel } from "./base.models";

@Entity()
export class User extends BaseModel {
  @PrimaryGeneratedColumn("uuid")
  userId!: string;

  @Column({ type: "text", unique: true })
  username!: string;

  @Column({ type: "text" })
  email!: string;

  @Column({ type: "text" })
  password!: string;

  @Column({ type: "text", nullable: true })
  fullName!: string;

  @Column({ type: "text", nullable: true })
  address?: string;

  @Column({ type: "text", nullable: true })
  phoneNumber?: string;

  @Column({ type: "text", nullable: true })
  userUnsigned?: string;

  @Column({ type: "text", nullable: true })
  idCard?: string;

  @Column({ type: "text", default: "active" })
  status!: string;

  @Column({ type: "uuid", nullable: true })
  roleId!: string;

  @Column({ type: "text", nullable: true })
  createdUser?: string;

  @Column({ type: "text", nullable: true })
  updatedUser?: string;

  @CreateDateColumn({ type: "timestamp", name: "created_date", nullable: true })
  createdDate!: Date;

  @UpdateDateColumn({ type: "timestamp", name: "updated_date", nullable: true })
  updatedDate!: Date;
}
