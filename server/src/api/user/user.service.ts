import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { IUserModel } from "./user.model";

export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>
  ) {}
  async getAllUsers(): Promise<IUserModel[]> {
    const users = await this.UserRepository.find();
    return users;
  }
}
