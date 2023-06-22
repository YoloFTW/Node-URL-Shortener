
module.exports = {
    
    GetUrl: async (app, id) =>{

        let Url = (await app.Mongo.Ids.find({Id: id}).toArray());
        
        return Url
    }
}