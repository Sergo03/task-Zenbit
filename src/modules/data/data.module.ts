import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './entities/data.entity'
import { DataController } from './controller/data.controller'
import {DataService} from './services/data.service'
import { ScrapperModule } from 'src/scrapper/scrapper.module';
import { ScrapperController } from 'src/scrapper/scrapper.controller';
import { ScrapperService } from 'src/scrapper/scrapper.service';

  
@Module({
  imports: [TypeOrmModule.forFeature([Data]),ScrapperModule],
  controllers: [DataController,ScrapperController],
  providers: [DataService,ScrapperService],
})
  
export class DataModule {}
