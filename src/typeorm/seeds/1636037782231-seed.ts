import { MigrationInterface, QueryRunner } from "typeorm";
import { getRepository } from 'typeorm';
import { Card } from 'typeorm/entities/Card';
import { Column } from "typeorm/entities/Column";
import { Row } from "typeorm/entities/Row";
import { cards, columns, rows } from "./seedData";
export class seed1636144227878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cardRepository = getRepository(Card);
        const columnsRepository = getRepository(Column);
        const rowsRepository = getRepository(Row);

        // [todo] update fields
        const c = cards.map(card => ({ label: card.label }));
        await cardRepository.save(c);

        await columnsRepository.save(columns);
        await rowsRepository.save(rows);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
