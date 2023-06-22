const { customAlphabet } = require('nanoid');
const { GetUrl } =require("./GetUrl")


const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = {
    
    ShortenUrl: async (app, url) =>{
        
        //add protocol
        if(!url.match(/(http(s)?:\/\/)/g)){
            url = "https://" + url
        }

        let Id;

        //make sure id not the same
        while(true){
            Id = customAlphabet(alphabet, 10)();
            
            let duplicates = await GetUrl(app, Id);

            if(duplicates.length == 0){
                break;
            }
        }

        //insert to mongo
        app.Mongo.Ids.insertOne({
            Url:url,
            Id:Id,
            date: new Date()
        })

        return Id
    }
}