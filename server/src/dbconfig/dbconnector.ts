import {Pool} from 'pg';

export default new Pool({
    host: 'realdeal.catm4dy042xk.ap-southeast-1.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: '9jdCeRclC0eyGAyvEa8k',
    database: 'postgres',
    // max: 20,
    // connectionString: 'postgres://postgres:9jdCeRclC0eyGAyvEa8k@realdeal.catm4dy042xk.ap-southeast-1.rds.amazonaws.com:5432',
    // idleTimeoutMillis: 30000
})