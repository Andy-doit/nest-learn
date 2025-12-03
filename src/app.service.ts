import { Body, Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Model } from 'mongoose';
import { MathService } from './math/math.service';

@Injectable()
export class AppService {
  constructor(
    // đang inject cái math Serivce vào cái service này
    private readonly mathService: MathService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectModel(Cat.name)
    private catModel: Model<Cat>,
  ) {}
  //promise // tự promist - await
  // hàm async trả về promise
  // và promis thì sẽ có cụm từ là await - async,  từ chờ kết quả hoàn thành r mới tiếp tục
  async getHello(): Promise<User> {
    return await this.userRepository.save({
      firstName: 'Cris',
      lastName: 'Ronaldo',
      isActive: true,
    });
  }

  async createCat(CatRequest): Promise<Cat> {
    return await this.catModel.create({
      name: CatRequest.name,
      age: CatRequest.age,
      breed: CatRequest.breed,
    });
  }
  async getCats(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
    async getMath(): Promise<number> {
    return this.mathService.add(5, 3);
  }

}
