import {Router} from 'express';
import CrawlData from '../controllers/TodosController';

const router = Router();
const crawlData = new CrawlData();

const getRealestatePosts = () => {
    const response = router.get(`/realestatePosts`, crawlData.get);
    return response;
}

export default router;