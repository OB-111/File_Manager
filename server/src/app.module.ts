import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { FileController } from './api/file/file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileService } from './api/file/file.service';
import { FileModule } from './api/file/file.module';
// import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'ezuser',
      password: 'ezpass',
      database: 'excel_upload_tasks',
      entities: [User, File, Customer],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([User, File, Customer]),
    FileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
