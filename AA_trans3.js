const pool = require('./db');

(async ()=>{

    const client = await pool.connect();
    try{
       
      
      await client.query('BEGIN');

isCustomerCancel = true;

  //Customer Cancel 1 product
const q1 = 'INSERT INTO "PrelimExam"."AA_LineItem"(po_id, product_id, po_quantity, po_price) VALUES ($1, $2,$3,$4) RETURNING *';
const data1 = ['3', '1', '2', '7000'];
const res1 = await client.query(q1,data1); 


if(isCustomerCancel){
    throw '\nError: Customer Succesfully Canceled Order.';
}

    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      console.error(e);
      console.log('Failure State: Transaction Rollback!')
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))