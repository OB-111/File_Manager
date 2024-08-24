import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  f_id: number;

  // Add more columns
  @Column()
  f_name: string;

  @Column()
  f_path: string;

  @CreateDateColumn()
  f_uploaded_at: Date;

  @ManyToOne(() => User, (user) => user.u_id)
  f_user: User;

  @Column({ default: 'pending' })
  f_status: string;
}
