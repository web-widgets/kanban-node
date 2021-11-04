import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Card } from 'typeorm/entities/Card';
import { getCardFields } from 'utils';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);
    try {
        const cards = await cardRepository.find({
            select: ['id', 'label'],
        });
        res.send(cards);
    } catch (err) {
        return next();
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);
    try {
        const { before } = req.body;
        const card: any = getCardFields(req.body);

        if (before) {
            // [todo] add before logic
        } else {
            await cardRepository.save(card);
        }

        res.send({ ok: true });
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
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}
export const move = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);
    try {
        const { id } = req.params;
        const { before, card } = req.body;

        if (before) {
            // [todo] add before logic
        } else {
            await cardRepository.update(id, card);
        }
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}
export const remove = async (req: Request, res: Response, next: NextFunction) => {
    const cardRepository = getRepository(Card);
    try {
        const { id } = req.params;
        await cardRepository.delete(id);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}