const express = require("express");
const axios = require("axios");
const port = 3000;
const app = express();




app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) =>{
    console.log(req);
})


app.listen(port, function (){
    console.log(`listening at http://localhost:${port}`);
});


