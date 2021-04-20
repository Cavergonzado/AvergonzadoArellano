const { query } = require("./db");
const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AA_LineItem"(po_id, product_id, po_quantity, po_price) VALUES ($1, $2,$3,$4) RETURNING *';
const data = ['3', '65', '3', '12000'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();