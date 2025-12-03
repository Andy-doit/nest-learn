import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './math/math.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
  // phải import module chứa service được inject vào
  imports: [
    MathModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User],),
    MongooseModule.forRoot('mongodb://an-mongo:mysecretpassword@localhost:27019'),
  MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
