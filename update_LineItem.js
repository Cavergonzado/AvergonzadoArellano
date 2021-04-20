const { query } = require("./db");
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AA_LineItem" SET po_price = $1 WHERE po_id = 1 RETURNING *';
const data = ['5000'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();