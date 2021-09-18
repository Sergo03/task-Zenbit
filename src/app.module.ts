import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataModule } from './modules/data/data.module'


@Module({
  imports: [TypeOrmModule.forRoot(), DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
