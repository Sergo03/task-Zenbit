import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Data} from './entities/data.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  controllers: [],
  providers: [],
})
export class DataModule {}
