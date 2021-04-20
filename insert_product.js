const { query } = require("./db");
const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data = ['3', 'Laptop', '80000'];


pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();