import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthCheckModule } from './health-check/health-check.module';
import { UserModule } from './user/user.module';

const importedModules = [HealthCheckModule, UserModule];
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://user:sep1914@hogwarts.qolnetw.mongodb.net/test',
    ),
    ...importedModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
