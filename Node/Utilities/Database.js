const {MongoClient} = require('mongodb');
const path = require('path');

require('dotenv').config();


const URI = `${process.env.MONGO_URI}`;

const Client = new MongoClient(URI, {
    useUnifiedTopology: true
});


//load mongo connection into app object
module.exports = async(app) =>{

    await Client.connect();

    app.Database = Client.db('UrlShortener');
    app.Mongo = {};

    app.Mongo.Ids = app.Database.collection('Ids');

}