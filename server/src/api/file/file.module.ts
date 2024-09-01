import { Module } from "@nestjs/common";
import { FileService } from "./file.service";
import { FileController } from "./file.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileEntity } from "src/entities/file.entity";
import { RedisService } from "../redis/redis.service";

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [FileService, RedisService],
  controllers: [FileController],
})
export class FileModule {}
