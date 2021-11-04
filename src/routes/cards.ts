import { Router } from 'express';
import { list, add, update, move, remove } from 'controllers/cards';

const router = Router();

router.get('/', list);
router.post('/', add);
router.put('/:id', update);
router.put('/:id/move', move);
router.delete('/:id', remove);

export default router;