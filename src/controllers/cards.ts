import { Request, Response, NextFunction } from 'express';
import { getRepository, LessThan } from 'typeorm';

import { Card } from 'typeorm/entities/Card';
import { cardFields, getCardFields, STEP } from 'utils';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);

    try {
        const cards = await cardRepository.find({
            select: cardFields as (keyof Card)[],
            order: {
                index: "ASC",
            },
        });
        res.send(cards);
    } catch (err) {
        return next();
    }
};
async function normalizeIndexes() {
    const cardRepository = getRepository(Card);

    const cards = await cardRepository.find({
        order: { index: 'ASC' },
        select: ['id', 'index'],
    });
    let current = STEP;
    cards.map(card => {
        card.index = current;
        current += STEP;
        return card;
    })
    return await cardRepository.save(cards);
}
async function getIndex(before: number) {
    const cardRepository = getRepository(Card);

    let index: number;
    if (before) {
        const beforeCard = await cardRepository.findOne({
            where: { id: before },
        });
        index = beforeCard.index;
        const prevCard = await cardRepository.findOne({
            order: { index: 'ASC' },
            where: { index: LessThan(index) },
        });
        if (!prevCard) {
            index = Math.round(beforeCard.index / 2);
        } else {
            index = (Math.round((beforeCard.index - prevCard.index) / 2)) + prevCard.index;
        }
    } else {
        const last = await cardRepository.findOne({
            order: { index: 'DESC' },
        });
        index = last?.index ? last.index + STEP : STEP;
    }
    if (index === 1) {
        await normalizeIndexes();
        return getIndex(before);
    }
    return index;
}
export const add = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);
    try {
        const { before, id, ...rest } = req.body;
        const fields: any = getCardFields(rest);

        const index = await getIndex(before);

        const card = await cardRepository.save({ ...fields, index });
        res.send({ status: "ok", id: card.id });
    } catch (err) {
        return next();
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);

    try {
        const { id } = req.params;
        const card: any = getCardFields(req.body);
        await cardRepository.update(id, card);
        res.send({ status: "ok" });
    } catch (err) {
        return next();
    }
}
export const move = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);

    try {
        const { id } = req.params;
        const { before, card } = req.body;
        const fields = getCardFields(card);

        const index = await getIndex(before);
        await cardRepository.update(id, { ...fields, index });
        res.send({ status: "ok" });
    } catch (err) {
        return next();
    }
}
export const remove = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);

    try {
        const { id } = req.params;
        await cardRepository.delete(id);
        res.send({ status: "ok" });
    } catch (err) {
        return next();
    }
}