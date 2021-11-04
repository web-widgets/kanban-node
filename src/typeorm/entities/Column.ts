import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('columns')
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

}