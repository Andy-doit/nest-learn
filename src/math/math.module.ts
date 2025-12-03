import { Module } from '@nestjs/common';
import { MathService } from './math.service';
import { CountModule } from 'src/count/count.module';

@Module({
  // cung cấp những service nào
  providers: [MathService],
  exports: [MathService], // cho phép module khác sử dụng service này
    imports: [CountModule],
})
export class MathModule {}
