import { Router } from 'express';

import cards from './cards';
import columns from './columns';
import rows from './rows';

const router = Router();

router.use('/cards', cards);
router.use('/columns', columns);
router.use('/rows', rows);

export default router;