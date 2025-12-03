import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // nó sẽ load appModule vào và chạy cả chương trình
  // bản chất của nestJs bắt đầu từ đây
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
