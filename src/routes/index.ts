import { Router } from 'express';

import cards from './cards';

const router = Router();

router.use('/cards', cards);

export default router;