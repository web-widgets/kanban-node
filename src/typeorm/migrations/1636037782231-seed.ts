import { MigrationInterface, QueryRunner } from "typeorm";
import { getRepository } from 'typeorm';
import { Card } from 'typeorm/entities/Card';
import { Column } from "typeorm/entities/Column";
import { Row } from "typeorm/entities/Row";
import { INDEX_STEP } from "utils";
import { cards, columns, rows } from "./seedData";
export class seed1636144227878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const cardRepository = getRepository(Card);
        const columnsRepository = getRepository(Column);
        const rowsRepository = getRepository(Row);
        const port = process.env.APP_SERVER_PORT || 3000;
        const serverUrl = process.env.APP_SERVER_URL || `http://localhost:${port}`;

        let current = INDEX_STEP;
        const indexedCards = cards.map(card => {
            if (card.attached) {
                card.attached = card.attached.map(attached => {
                    const fullPath = `${serverUrl}/uploads/${attached.url}`;
                    return {
                        ...attached,
                        url: fullPath
                    }
                })
            }
            const obj = {
                ...card,
                index: current
            }
            current += INDEX_STEP;
            return obj;
        });

        await cardRepository.save(indexedCards);

        await columnsRepository.save(columns);
        await rowsRepository.save(rows);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
