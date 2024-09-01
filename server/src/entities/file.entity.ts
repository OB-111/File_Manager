import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ schema: "nesttest", name: "files" })
@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn()
  f_id: number;

  // Add more columns
  @Column()
  f_name: string;

  @Column()
  f_path: string;

  @CreateDateColumn()
  f_uploaded_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.u_id)
  f_user: UserEntity;

  @Column({ default: "pending" })
  f_status: string;
}
