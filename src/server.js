// const express=require("express");
// const app=express();
// require("dotenv").config();
// const control=require('./controller/users.controller');
import express from "express";
const app=express();
import "dotenv/config";
import  pg from "pg";


const pool=new pg.Pool({
    host: process.env.HOST,
    port: 5432,
    user: "postgres",
    database: "testdb",
    password: process.env.PASSWORDPSQL
});
async function main() {
    // pool.connect();
    app.get("/users", (req, res)=>{
        console.log('get');
        pool.query('select * from users', async(err, data)=>{
        res.send(data.rows);
            console.log(data, '?????????????');
        }) 
    })
    // pool.query('select * from users', (err, data)=>{
    //         console.log(data, '?????????????');
    //     }) 
    //     try {
            // pool.on('connect', ()=>console.log('connection.......!')); 
            // const data=await pool.query('select * from users')
            //  console.log(data);
            // res.send(data);
            // return data;
    //     } catch (error) {
    //         console.log(error.message);
    //         res.send(error.message);
    //     }
    // });
    
    
    // await pool.end();
    
    app.listen(+process.env.PORT, console.log('done: '+7000));
};
main();





