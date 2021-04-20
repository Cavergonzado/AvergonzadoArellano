const pool = require('./db');

(async ()=>{

    const client = await pool.connect();
    try{
       
      
      await client.query('BEGIN');

  //Customer order 3 products

const q1 = 'INSERT INTO "PrelimExam"."AA_LineItem"(po_id, product_id, po_quantity, po_price) VALUES ($1, $2,$3,$4) RETURNING *';
const data1 = ['3', '65', '2', '80000'];
const res1 = await client.query(q1,data1); 


const q2 = 'INSERT INTO "PrelimExam"."AA_LineItem"(po_id, product_id, po_quantity, po_price) VALUES ($1, $2,$3,$4) RETURNING *';
const data2 = ['1', '3', '1', '80000'];
const res2 = await client.query(q2,data2); 

const q3 = 'INSERT INTO "PrelimExam"."AA_LineItem"(po_id, product_id, po_quantity, po_price) VALUES ($1, $2,$3,$4) RETURNING *';
const data3 = ['4', '1', '1', '7000'];
const res3 = await client.query(q3,data3); 


    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))