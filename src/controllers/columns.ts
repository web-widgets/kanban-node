import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Columns } from 'typeorm/entities/Column';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const columnsRepository = getRepository(Columns);
    try {
        const columns = await columnsRepository.find({
            select: ['id', 'label'],
        });
        res.send(columns);
    } catch (err) {
        return next();
    }
};
export const add = async (req: Request, res: Response, next: NextFunction) => {
    const columnsRepository = getRepository(Columns);
    try {
        const column = req.body;
        await columnsRepository.save(column)
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
};
export const update = async (req: Request, res: Response, next: NextFunction) => {
    const columnsRepository = getRepository(Columns);
    const { id } = req.params;
    const column = req.body;
    try {
        await columnsRepository.update(id, column);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
};
export const remove = async (req: Request, res: Response, next: NextFunction) => {
    const columnsRepository = getRepository(Columns);
    const { id } = req.params;
    try {
        await columnsRepository.delete(id);
        res.send({ ok: true });
    } catch (err) {
        return next();
    }
}
