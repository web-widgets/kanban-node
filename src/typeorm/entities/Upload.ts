import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Card } from './Card';

@Entity('uploads')
export class Upload {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Card, card => card.attached, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true })
    card: Card;

    @Column()
    url?: string;

    @Column({ nullable: true })
    name?: string;
    @Column({ nullable: true })
    isCover?: boolean;

}