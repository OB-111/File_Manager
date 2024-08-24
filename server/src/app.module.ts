import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
