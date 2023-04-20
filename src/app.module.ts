import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckModule } from './health-check/health-check.module';

const importedModules = [HealthCheckModule];
@Module({
  imports: [ConfigModule.forRoot(), ...importedModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
