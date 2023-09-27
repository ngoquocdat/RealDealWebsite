import pool from '../dbconfig/dbconnector';

class CrawlData {
    public async get(req,res) {
        try {
            const client = await pool.connect();

            const sql = `
                SELECT * FROM public.logic_api_news
                ORDER BY id ASC LIMIT 100
            `;
            const { rows } = await client.query(sql);
            const todos =  rows;
            
            client.release();

            res.json(todos);

        } catch(err) {
            res.status(400).send(err);
        }
    }
}

export default CrawlData;