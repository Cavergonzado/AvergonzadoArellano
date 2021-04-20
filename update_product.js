const { query } = require("./db");
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AA_product" SET product_name = $1, product_price = $2 WHERE product_id = 1 RETURNING *';
const data = ['Washing Machine', '7000'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();