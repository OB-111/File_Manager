import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FileEntity } from './file.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  c_name: string;

  @Column()
  c_email: string;

  @Column()
  c_israeli_id: string;

  @Column()
  c_phone: string;

  // @ManyToOne(() => FileEntity, (file) => file.f_id)
  // f_ids: FileEntity;
}
