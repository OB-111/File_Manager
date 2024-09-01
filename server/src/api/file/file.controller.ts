import {
  Body,
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";
import { RedisService } from "../redis/redis.service";
import { AppConfig } from "src/config/app.config";

const MAX_FILES = 5;
@Controller(AppConfig.apiUrl.files)
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly redisService: RedisService
  ) {}

  @Post("upload/:userId")
  @UseInterceptors(FilesInterceptor("files"))
  uploadFile(
    @Param("userId") userId: string,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    // if files bigger than 5
    // SPLIT0 - FILES
    //
    // if (files.length > 5) {
    // 	this.redisService.addToPendingQueue(files);
    // } else {
    // 	this.fileService.uploadFiles(files);
    // }

    return this.fileService.uploadFiles(files);
  }
}
