const pool = require('./db');

(async ()=>{

    const client = await pool.connect();
    try{
       
      
      await client.query('BEGIN');

const q1 = 'UPDATE "PrelimExam"."AA_supplier" SET supp_name = $1 WHERE supp_id = 83 RETURNING *';
const data1 = ['Jhonny Bravo'];
const res1 = await client.query(q1,data1); 
console.log('Successfully Inserted');
    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))