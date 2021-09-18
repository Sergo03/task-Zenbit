import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './entities/data.entity'
import { DataController } from './controller/data.controller'
import {DataService} from './services/data.service'
import { ScrapperModule } from 'src/scrapper/scrapper.module';
import { ScrapperController } from 'src/scrapper/scrapper.controller';
import { ScrapperService } from 'src/scrapper/scrapper.service';
import { TasksService } from 'src/shedule/shedule.service';
import { ScheduleModule } from '@nestjs/schedule';


  
@Module({
  imports: [TypeOrmModule.forFeature([Data]),ScrapperModule,ScheduleModule.forRoot()],
  controllers: [DataController,ScrapperController],
  providers: [DataService, ScrapperService,TasksService,ScrapperController],
})
  
export class DataModule {}
