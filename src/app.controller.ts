import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('math')
  getMath(): Promise<number> {
    return this.appService.getMath();
  }
  @Get()
  getHello(): Promise<User> {
    return this.appService.getHello();
  }
  @Post('cats')
  createCat(@Body() request: CatRequest) : Promise<any>{
    return this.appService.createCat(request);
  }
  @Get('cats')
  getCats(): Promise<any>{
    return this.appService.getCats();
  }
}
export interface CatRequest {
    name: string;
    age: number;
    breed: string;
}
