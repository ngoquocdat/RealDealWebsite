import {Router} from 'express';
import CrawlData from '../controllers/TodosController';

const router = Router();
const crawlData = new CrawlData();

router.get(`/`, crawlData.get);

export default router;