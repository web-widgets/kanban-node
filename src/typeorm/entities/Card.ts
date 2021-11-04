import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

}