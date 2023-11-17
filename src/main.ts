import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ErrorHandler } from './filters/error-handler.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(new ValidationPipe());


  // Filters
  app.useGlobalFilters(new ErrorHandler());

  const port = 3000;
  await app.listen(port);
}
bootstrap();
