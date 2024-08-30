import { Redis } from 'ioredis';

export interface IFile {
  fileId: number;
  userId: number;
}

export class RedisService {
  private redisClient: Redis;
  constructor() {
    this.redisClient = new Redis();
  }

  // Get the count of currently processing files
  async getProcessingCount(): Promise<number> {
    return await this.redisClient.llen('processing_files');
  }

  // Add file to the processing list
  async addToProcessing(fileId: number): Promise<void> {
    await this.redisClient.rpush('processing_files', fileId.toString());
  }

  // Remove file from the processing list
  async removeFromProcessing(fileId: number): Promise<void> {
    await this.redisClient.lrem('processing_files', 0, fileId.toString());
  }

  async addToPendingQueue(files: Array<Express.Multer.File>, userId:number): Promise<void> {
    // for (const file of files) {
    //   const fileData = {file., file.userId};
    //   await this.redisClient.rpush(JSON.stringify(file));      
    // }
  }

  // Get the next file from the pending queue
  async getNextPendingFile(): Promise<IFile> {
    const fileData = await this.redisClient.lpop('pending_files');
    return fileData ? JSON.parse(fileData) : null;
  }

  // Remove file from the Pending list
  async removeFromPendingQueue(fileId: number): Promise<void> {
    await this.redisClient.lrem('processing_files', 0, fileId.toString());
  }
}
