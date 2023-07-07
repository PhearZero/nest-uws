import { NestFactory } from '@nestjs/core';
import { UwsHttpAdapter } from './adapters/uws-http-adapter';
import { UwsIoAdapter } from './adapters/uws-io-adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new UwsHttpAdapter());
  const ioAdapter = new UwsIoAdapter(app);
  app.useWebSocketAdapter(ioAdapter);
  await app.listen(3000);
}
bootstrap();
