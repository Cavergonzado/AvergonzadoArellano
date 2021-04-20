const { query } = require("./db");
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AA_PurchaseOrder" SET customer_id = $1, supplier_id = $2 WHERE po_id = 1 RETURNING *';
const data = ['2','3'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();