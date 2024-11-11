const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "cruddb"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/post",(req,res)=>{
    const {name,email,contact} = req.body;
    const sqlInsert = "insert into contactdetails(namel,email,contact) values (?,?,?)";
    db.query(sqlInsert,[name,email,contact],(error,result) => {
            if(error){
                console.log(error);
            }
        });
})

app.delete("/api/remove/:id",(req,res)=>{
    const {id} = req.params;
    const sqlRemove = "delete from contactdetails where id=?";
    db.query(sqlRemove,id,(error,result) => {
            if(error){
                console.log(error);
            }
        });
})

app.get("/api/get",(req,res)=>{
    const sqlQuery = "select * from contactdetails";
    db.query(sqlQuery,(error,result)=>{
        res.send(result);
    })
})

app.get("/api/get/:id",(req,res)=>{
    const {id} = req.params;
    const sqlQuery = "SELECT * FROM CONTACTDETAILS where id = ?";
    db.query(sqlQuery,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})

app.put("/api/put/:id",(req,res)=>{
    const {id} = req.params;
    const {name,email,contact} = req.body;
    const sqlUpdate = "update contactdetails set namel=?,email=?,contact=? where id=?";
    db.query(sqlUpdate,[name,email,contact,id],(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })
})

app.get("/",(req,res)=>{
    // const sqlInsert = "insert into contactdetails(name,email,phn_num) values ('John Doe','john@gmail.com','1234567')";
    // db.query(sqlInsert,(error,result) => {
    //     console.log("error",error)
    //     console.log("result",result)
    // });
    // res.send("Hello Express");
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})