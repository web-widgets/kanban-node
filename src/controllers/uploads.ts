import { Request, Response, NextFunction } from 'express';

export const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const filename = req.params.file;
        res.sendFile(`${__dirname}/uploads/${filename}`);
    } catch (error) {
        res.send({ status: "err", error });
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const port = process.env.PORT || 3000;
    const serverUrl = process.env.APP_SERVER_URL || `http://localhost:${port}`;

    try {
        const { file } = req;
        const fullPath = `${serverUrl}/${file.path}`;

        res.send({ status: "ok", path: fullPath, id: file.filename, file: { size: file.size } });
    } catch (error) {
        res.send({ status: "err", error });
    }
};
