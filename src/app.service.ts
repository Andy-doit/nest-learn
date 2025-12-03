import { Injectable } from '@nestjs/common';
import { MathService } from './math/math.service';

@Injectable()
export class AppService {
  constructor(
      // đang inject cái math Serivce vào cái service này
    private readonly mathService: MathService) {

    }

  getHello(): number{
    return this.mathService.add(12, 3);
  }
}
