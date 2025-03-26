import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // I'm having to use `NestFactory.create` vs `NestFactory.createMicroservice`
  // because I'm using @golevelup's RMQ transport implementation due to NestJS
  // not being 100% current have the moment.
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4002);
  Logger.log(`Application is running.`);
}

bootstrap();
