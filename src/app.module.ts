import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';

@Module({

  // phải import module chứa service được inject vào
  imports: [MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
