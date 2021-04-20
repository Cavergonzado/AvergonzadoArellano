const { query } = require("./db");
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AA_customer" SET customer_name = $1, customer_address = $2 WHERE customer_id = 1 RETURNING *';
const data = ['Christian Pascual', 'Manila'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();