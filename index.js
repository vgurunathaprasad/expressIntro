const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

app
    // add body parser to parse the Request body
    .use(bodyParser.json())
    .get("/",(request,response) =>{
        response.send("<h1>Home Page!</h1>");
    })
    .get("/about", (request,response) => {
        response.send("<h1>About Page!</h1>");
    })
    .post("/cars",(request,response) => {
        console.log(request.body);
        console.log(request.query);
        response.json({
            model:"X",
            brand:"Tesla",
        });
    })
    .post("/cars/:model",(request,response) => {
        response.json({
            requestedModel : request.params.model,
        });
    })
    .get("*",(request,response) => {
        response.status(404).send("<h1>Page not found!");
    })
    .listen(8000);