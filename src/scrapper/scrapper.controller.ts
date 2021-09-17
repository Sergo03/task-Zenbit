import { Controller, Get } from '@nestjs/common';
import { DataService } from 'src/modules/data/services/data.service';
import { ScrapperService } from './scrapper.service';
import { Data } from '../modules/data/entities/data.entity'
import {CreateDto} from '../modules/data/controller/dto'

@Controller('scrapper')
export class ScrapperController {
    constructor(private scrapperService: ScrapperService) { }
    
    @Get()
    scrapperController() {
       
        return this.scrapperService.getData()
    }

}
