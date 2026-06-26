import { Router } from 'express';
import { index, show, filterByRegion } from '../controllers/teamController.js';

const router = Router();

router.get('/', index);
router.get('/:id', show);
router.get('/region', filterByRegion);

export default router;