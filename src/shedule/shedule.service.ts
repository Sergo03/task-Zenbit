import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {ScrapperController} from '../scrapper/scrapper.controller'

@Injectable()
export class TasksService {
  constructor(private readonly scrapperController:ScrapperController){}

  @Cron('0 */2 * * * *')
  handleCron() {
    this.scrapperController.scrapperController()
  }
}