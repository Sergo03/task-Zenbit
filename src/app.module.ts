import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataModule } from './modules/data/data.module'
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './shedule/shedule.service';
import { SheduleController } from './shedule/shedule.controller';
import { ScrapperController } from './scrapper/scrapper.controller';
import { ScrapperService } from './scrapper/scrapper.service';

@Module({
  imports: [TypeOrmModule.forRoot(), DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
