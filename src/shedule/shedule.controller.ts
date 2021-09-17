import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./shedule.service";


@Controller('shedule')
export class SheduleController {
    constructor(private readonly tasksService:TasksService){}
    @Get()
    sheduleController() {
        this.tasksService.handleCron()
    }
}