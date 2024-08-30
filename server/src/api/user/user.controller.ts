import { User } from "src/entities/user.entity";
import { UserService } from "./user.service";
import { Get } from "@nestjs/common";

export class UserContoller {
    constructor(private readonly userService: UserService){}

    @Get('')
    getUsers() {
        return this.userService.getAllUsers();
    }
}