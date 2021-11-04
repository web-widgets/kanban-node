import { MigrationInterface, QueryRunner } from "typeorm";
import { getRepository } from 'typeorm';
import { Card } from 'typeorm/entities/Card';
import { cards } from "./seedData";
export class seed1636037782231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cardRepository = getRepository(Card);
        // [todo] update fields
        const c = cards.map(card => ({ label: card.label }));
        await cardRepository.save(c);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
