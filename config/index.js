const mongo = require('mongoose');


module.exports = {

    auth: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
    },
    connectMongo: () => {

        mongo.connect('mongodb+srv://jashan:jassa662@cluster0.huicb.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(_ => {
                console.log('Mongo Connected');
            }, err => {
                console.log(err);
            })
    }

}
