const { query } = require("./db");
const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
const data = ['Lisa', 'Bangkook'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();