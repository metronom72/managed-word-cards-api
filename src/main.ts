import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnvParam } from './shared/utils/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        validateCustomDecorators: true,
      }),
  );

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  const port = getEnvParam('COMMON_APP_PORT') || 3000;
  await app.listen(port);
}

bootstrap();
