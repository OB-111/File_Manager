export class FileService {
  private readonly MAX_FILES = 5;

  check(files: Array<Express.Multer.File>) {
    return files;
  }
}
