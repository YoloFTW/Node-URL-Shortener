const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
const http = require('http');
const Database = require('./Utilities/Database');
const { GetUrl } =require("./Utilities/GetUrl")

const { ShortenUrl } = require("./Utilities/ShortenUrl")

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const HOST = process.env.HOST || `localhost:${PORT}`;

const app = express();

var options = {};

var server = http.createServer(options, app);

//use cors
app.use(cors())

//body parser url encoded
app.use(bodyParser.urlencoded({extended: true}));

//body parser json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../React/client/build')));


//Pass the database into the app
Database(app)


// Handle GET requests to /shorten route
app.post("/shorten", async (req, res) => {

    let id = await ShortenUrl(app, req.body.Url)

    let ShortenedUrl = `${HOST}/${id}`
    res.json({ ShortenedUrl: `${ShortenedUrl}` });

});

// Handle GET requests to / route with an id
app.get("/:Id", async (req, res) => {

    let url = await GetUrl(app, req.params.Id)

    if(url.length >= 1){

        res.redirect(`${url[0].Url}`);
    
    //redirect to index
    }else{
        res.redirect("/")

    }

});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});