import {
	Controller,
	HttpException,
	HttpStatus,
	// Get,
	Post,
	UploadedFile,
	UploadedFiles,
	UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { RedisService } from '../redis/redis.service';

const MAX_FILES = 5;
@Controller('files')
export class FileController {
	constructor(
		private readonly fileService: FileService,
		private readonly redisService: RedisService
	) {}

	@Post('upload')
	@UseInterceptors(FilesInterceptor('files'))
	uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
		// if files bigger than 5
		// SPLIT0 - FILES
		//
		// if (files.length > 5) {
		// 	this.redisService.addToPendingQueue(files);
		// } else {
		// 	this.fileService.uploadFiles(files);
		// }
	}
}
