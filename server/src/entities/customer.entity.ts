import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity({ schema: "nesttest", name: "customers" })
export class CustomerEntity {
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
