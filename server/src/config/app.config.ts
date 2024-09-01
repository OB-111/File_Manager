import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CustomerEntity } from "src/entities/customer.entity";
import { FileEntity } from "src/entities/file.entity";
import { UserEntity } from "src/entities/user.entity";

export class AppConfig {
  static readonly port = 3000;

  // container apps prefix as in production
  static readonly apiUrl = {
    users: "users",
    files: "files",
  };

  // TODO - change to env
  static readonly typeOrmConfig: TypeOrmModuleOptions = {
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "ezuser",
    password: "ezpass",
    database: "excel_upload_tasks",
    entities: [CustomerEntity, FileEntity, UserEntity],
    // migrations: [__dirname + '/src/migrations/*.ts'],
    // cli: { migrationsDir: 'src/migrations' },
    // entity 자동으로 불러오는 설정
    autoLoadEntities: true,
    charset: "utf8mb4",
    synchronize: false,
    logging: true,
    keepConnectionAlive: true,
  };
}
