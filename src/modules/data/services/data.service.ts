import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Data} from '../entities/data.entity'

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Data)
    private dataRepository: Repository<Data>,
  ) {}

  findAll(): Promise<Data[]> {
    return this.dataRepository.find();
  }

  findOne(id: string): Promise<Data> {
    return this.dataRepository.findOne(id);
  }

  findData(title: string): Promise<Data>{
    return this.dataRepository.findOne(title)
  }

  create(data: Data): Promise<Data> {
    delete data.id
    return this.dataRepository.save(data);
  }

  
}