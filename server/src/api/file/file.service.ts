import { InjectRepository } from "@nestjs/typeorm";
import { FileEntity } from "src/entities/file.entity";
import { Repository } from "typeorm";
import { RedisService } from "../redis/redis.service";
import { readAndCompressFiles } from "src/utils/file.utils";

export class FileService {
  private readonly MAX_FILES = 5;
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    private readonly redisService: RedisService
  ) {}

  // Handle multiple file uploads
  async uploadFiles(files: Express.Multer.File[]): Promise<void> {
    const usersData = readAndCompressFiles(files);
    usersData.forEach((user) => {
      console.log(user);
    });
  }
}
