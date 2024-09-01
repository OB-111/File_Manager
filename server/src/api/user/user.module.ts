import { Module } from "@nestjs/common";
import { UserContoller } from "./user.controller";
import { UserService } from "./user.service";
import { IUserModel } from "./user.model";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserContoller],
  providers: [UserService],
})
export class UserModule {}
