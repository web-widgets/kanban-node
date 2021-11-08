import { Router } from 'express';
import { list, add } from 'controllers/uploads';
import multer from 'multer';
import path from 'path';

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
    },
});
const upload = multer({
    storage,
    fileFilter: function (_req, _file, callback) {
        callback(null, true);
    },
    limits: {
        fileSize: 1024 * 1024,
    },
});


router.get('/:id', list);
router.post('/', upload.single("upload"), add);

export default router;