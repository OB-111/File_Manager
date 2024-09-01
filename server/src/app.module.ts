import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./entities/customer.entity";
import { UserEntity } from "./entities/user.entity";
import { FileModule } from "./api/file/file.module";
import { AppConfig } from "./config/app.config";
import { UserModule } from "./api/user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(AppConfig.typeOrmConfig),
    TypeOrmModule.forFeature([UserEntity, File, CustomerEntity]),
    FileModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
