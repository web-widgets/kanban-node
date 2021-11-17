import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { getRepository } from 'typeorm';

import { Upload } from '../typeorm/entities/Upload';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const filename = req.params.file;
        const filePath = path.join(process.cwd(), process.env.APP_BINARYDATA || "uploads", filename);
        res.sendFile(filePath);
    } catch (error) {
        res.send({ status: "err", error });
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const port = process.env.PORT || 3000;
    const serverUrl = process.env.APP_SERVER_URL || `http://localhost:${port}`;
    const uploadsRepository = getRepository(Upload);
    try {
        const { file } = req;
        const fullPath = `${serverUrl}/${file.path}`;
        const up = await uploadsRepository.save({ url: fullPath, name: file.filename })
        res.send(up);

    } catch (error) {
        res.send({ status: "err", error });
    }
};