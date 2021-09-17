import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {ScrapperController} from '../scrapper/scrapper.controller'

@Injectable()
export class TasksService {
  constructor(private readonly scrapperController:ScrapperController){}

  @Cron('45 * * * * *')
  handleCron() {
    this.scrapperController.scrapperController()
      // console.log(123);
    // this.logger.debug('Called when the current second is 45');
  }
}