import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({default:null})
  price?: string;

  @Column()
  city: string;
}