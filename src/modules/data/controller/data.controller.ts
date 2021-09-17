import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Data } from '../entities/data.entity';
import { DataService } from '../services/data.service';




@Controller('api/data')
export class DataController {
  constructor(private readonly dataService:DataService){}

  @Get()
  getList(): Promise<Data[]> {
    return this.dataService.findAll()
  }

  @Get(':id')
  getById(@Param('id') id: string):Promise<Data> {
    return this.dataService.findOne(id)
  }
}
