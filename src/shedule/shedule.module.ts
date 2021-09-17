import { Module } from '@nestjs/common';
import { ScrapperController } from 'src/scrapper/scrapper.controller';
import { ScrapperModule } from 'src/scrapper/scrapper.module';
import { ScrapperService } from 'src/scrapper/scrapper.service';

@Module({
    // imports: [ScrapperModule],
    // controllers: [ScrapperController],
    // providers:[ScrapperService]
})
export class SheduleModule {}