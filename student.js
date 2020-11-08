const express = require("express");
const bodyParser = require("body-parser");
const studentsData = require("./studentData");

const app = express();


app
    .use(bodyParser.json())
    .get("/students",(req,res) => {
        res.status(200).json({
            data:studentsData,
        });
    })
    .post("/students",(req,res) => {
        // validation on the req.body
        req.body.students.forEach((students) => {
            studentsData.push(student);
        });
        res.status(200).json({
            status: "success",
        });
    })

    .patch("/students",(req,res) => {})
    .delete("/students",(req,res) => {})
    .get("/students/:id",(req,res) => {
        res.status(200).json({
            data:studentsData.find(
                (student) => student.id === parseInt(req.params.id)
            ),
        });
    })
    .post("/students/:id",(req,res) => {})
    .patch("/students/:id",(req,res) => {})
    .delete("/students/:id",(req,res) => {})
    .listen("8000");