import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.EXPOSED_PORT;
  await app.listen(port);
  Logger.log(`🔥 Server running on http://localhost:${port}/`, 'NestBootstrap');
}
bootstrap();
