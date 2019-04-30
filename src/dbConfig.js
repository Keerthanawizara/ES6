// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// console.log("mongodb connected successfully");
// module.exports = {
//     MongoClient: MongoClient,
//     url: url,
//     db: 'mongo',
//    // collection: 'propertydatacollection'
//     collection: [

//     {
//      property:'propertydatacollections',
//      file:'fileuploadcollections'

//    }

//     ]

// }



const mongoose = require('mongoose');

const url = "127.0.0.1:27017"
const dbName = "users"

class Database {
    connection() {
        mongoose.set('useCreateIndex', true)
        mongoose.connect(`mongodb://${url}/${dbName}`,{useNewUrlParser: true})
        .then(() => {
            console.log('Database connected successfully')
        })
        .catch(error => {
            console.log(error)
        })
    }
}



module.exports = Database
