import { Entity, PrimaryGeneratedColumn, Column as Col } from 'typeorm';

@Entity('columns')
export class Column {
    @PrimaryGeneratedColumn()
    id: number;

    @Col()
    label: string;

}