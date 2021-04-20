const { query } = require("./db");
const pool = require("./db");

const sql = 'INSERT INTO "PrelimExam"."AA_PurchaseOrder"(supplier_id, customer_id, po_quantity) VALUES ($1, $2, $3) RETURNING *';
const data = ['3', '3', '1'];


pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();