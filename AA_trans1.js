const pool = require('./db');

(async ()=>{

    const client = await pool.connect();
    try{
       
      
      await client.query('BEGIN');

  //Insert 5 Suppliers
      const q1 ='INSERT INTO "PrelimExam"."AA_supplier"(supp_name, supp_address) VALUES ($1, $2) RETURNING *';
      const data1 = ['Leomord', 'Palawan'];
      const res1 = await client.query(q1,data1);

      const q2 ='INSERT INTO "PrelimExam"."AA_supplier"(supp_name, supp_address) VALUES ($1, $2) RETURNING *';
      const data2 = ['Cyclops', 'Panabo City'];
      const res2 = await client.query(q2,data2);

      const q3 ='INSERT INTO "PrelimExam"."AA_supplier"(supp_name, supp_address) VALUES ($1, $2) RETURNING *';
      const data3 = ['Eudora', 'Tagum City'];
      const res3 = await client.query(q3,data3);

      const q4 ='INSERT INTO "PrelimExam"."AA_supplier"(supp_name, supp_address) VALUES ($1, $2) RETURNING *';
      const data4 = ['Saver', 'Manila City'];
      const res4 = await client.query(q4,data4);

      const q5 ='INSERT INTO "PrelimExam"."AA_supplier"(supp_name, supp_address) VALUES ($1, $2) RETURNING *';
      const data5 = ['Kadita', 'Gmall'];
      const res5 = await client.query(q5,data5);
      


   //Insert 5 products
   const q6 = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data6 = ['3', 'TV', '6000'];
const res6 = await client.query(q6,data6);

const q7 = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data7 = ['3', 'Iphone12', '79000'];
const res7 = await client.query(q7,data7);

const q8 = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data8 = ['3', 'Aircon', '10000'];
const res8 = await client.query(q8,data8);

const q9 = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data9 = ['3', 'Electric fan', '1000'];
const res9 = await client.query(q9,data9);

const q10 = 'INSERT INTO "PrelimExam"."AA_product"(supplier_id, product_name, product_price) VALUES ($1, $2, $3) RETURNING *';
const data10 = ['3', 'Refrigerator', '3000'];
const res10 = await client.query(q10,data10);

   //Insert 5 customers
      const q11 = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
      const data11 = ['Super, Mario', 'Cebu City'];
      const res11 = await client.query(q11,data11);

      const q12 = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
      const data12 = ['Dora', 'Torres'];
      const res12 = await client.query(q12,data12);

      const q13 = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
      const data13 = ['Maria', 'Bangkerohan'];
      const res13 = await client.query(q13,data13);

      const q14 = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
      const data14 = ['Leonora', 'Toril'];
      const res14 = await client.query(q14,data14);

      const q15 = 'INSERT INTO "PrelimExam"."AA_customer"(customer_name, customer_address) VALUES ($1, $2) RETURNING *';
      const data15 = ['Theressa', 'Digos City'];
      const res15 = await client.query(q15,data15); 

     
    }catch(e){
      //failure state
      await client.query('ROLLBACK');
      throw e;
    }finally{
      //success state
      client.release();
    }
  })().catch(e=>console.error(e.stack))