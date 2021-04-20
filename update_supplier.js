const { query } = require("./db");
const pool = require("./db");

const sql = 'UPDATE "PrelimExam"."AA_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id = 2 RETURNING *';
const data = ['Burno Mars', 'Philippines'];

pool.query(sql,data,(err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});
pool.end();