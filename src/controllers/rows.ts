import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Row } from '../typeorm/entities/Row';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const rowRepository = getRepository(Row);

    try {
        const rows = await rowRepository.find({
            select: ['id', 'label'],
        });
        res.send(rows);
    } catch (err) {
        return next();
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const rowRepository = getRepository(Row);

    try {
        const row = req.body;
        await rowRepository.save(row);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
    const rowRepository = getRepository(Row);

    try {
        const { id } = req.params;
        const row = req.body;
        await rowRepository.update(id, row);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    const rowRepository = getRepository(Row);

    try {
        const { id } = req.params;
        await rowRepository.remove(id);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}