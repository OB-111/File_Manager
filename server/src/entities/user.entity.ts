import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "nesttest", name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  u_name: string;
}
