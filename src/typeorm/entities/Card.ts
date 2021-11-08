import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  index: number;

  @Column()
  label: string;

  @Column()
  column: number;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  progress?: number;

  @Column("int", { nullable: true, array: true })
  users?: number[];

  @Column({ nullable: true })
  start_date?: string;

  @Column({ nullable: true })
  end_date?: string;

  @Column({ nullable: true })
  color?: string;

  @Column({ nullable: true })
  status?: number;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  sprint?: string;

}