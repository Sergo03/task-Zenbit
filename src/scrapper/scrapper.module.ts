import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SheduleController } from 'src/shedule/shedule.controller';
import { TasksService } from 'src/shedule/shedule.service';
import { ScrapperController } from './scrapper.controller';
import { ScrapperService } from './scrapper.service';

@Module({
    // imports: [ScheduleModule],
    // controllers:[ScrapperController,SheduleController],
    // providers: [ScrapperService,TasksService],
   
})
export class ScrapperModule {}
