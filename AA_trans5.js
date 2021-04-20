const pool = require('./db');

(async ()=>{

    const client = await pool.connect();
    try{
       
      
      await client.query('BEGIN');

const q1 = 'SELECT * FROM "PrelimExam"."AA_PurchaseOrder"';
const res1 = await client.query(q1); 

res1.rows.forEach(e1 => console.log(`Supplier ID: ${e1.supplier_id} Customer_id: ${e1.customer_id}, POQuantity: ${e1.po_quantity}`));

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