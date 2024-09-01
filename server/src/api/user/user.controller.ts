import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { AppConfig } from "src/config/app.config";
import { IUserModel } from "./user.model";

@Controller(AppConfig.apiUrl.users)
export class UserContoller {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }
}
