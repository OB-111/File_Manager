import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { IUserModel } from "./user.model";

export class UserService {
    constructor(
      @InjectRepository(User)
      private readonly UserRepository: Repository<User>,
    ) {}
    async getAllUsers(): Promise<IUserModel[]>{
        return [{
            u_id: 1,
            u_name: 'shay'
        },
        {
            u_id: 2,
            u_name: 'omri'
        }]
    }
  }