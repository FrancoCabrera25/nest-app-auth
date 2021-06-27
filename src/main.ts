import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
 // app.use(csurf());
  app.use(helmet());
 

  await app.listen(3000);
}
bootstrap();
