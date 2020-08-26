const express = require("express");
const axios = require("axios");
const port = 3000;
const app = express();
const bodyParse = require("body-parser");


app.use(bodyParse.urlencoded({ extended : true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) =>{

    const query = req.body.cityName;
    const appid = "3044b14204cf4ee0a3fbb30def0a24ae";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query+"&appid="+appid + "&units"+ unit;

    const getWeather = async () => {
        try{
            const weather = await axios.get(url);
            res.write("<h1>The temperature in "+ query + " is "+ weather.data.main.temp + "</h1>");

            const icon =  weather.data.weather[0].icon;

            const imageUrl =  "http://openweathermap.org/img/wn/" +icon +"@2x.png";

            res.write("<img src="+imageUrl+">")
            return weather;
        }catch(error){
            console.error(error);
        }

    }

    getWeather().then( response => {
        res.send();
    })



})


app.listen(port, function (){
    console.log(`listening at http://localhost:${port}`);
});


