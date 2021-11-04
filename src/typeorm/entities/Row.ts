import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rows')
export class Row {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

}