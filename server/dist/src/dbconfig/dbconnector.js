"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.default = new pg_1.Pool({
    host: 'realdeal.catm4dy042xk.ap-southeast-1.rds.amazonaws.com',
    user: 'postgres',
    password: '9jdCeRclC0eyGAyvEa8k',
    max: 20,
    // connectionString: 'postgres://postgres:9jdCeRclC0eyGAyvEa8k@realdeal.catm4dy042xk.ap-southeast-1.rds.amazonaws.com:5432',
    idleTimeoutMillis: 30000
});
//# sourceMappingURL=dbconnector.js.map