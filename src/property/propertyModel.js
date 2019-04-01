const dbConfig = require('../dbConfig')
const mongojs = require('mongojs')

const propertyDataModel = (id) => {
  const db = mongojs(dbConfig.db)
    const propertyData = () => {
        return new Promise((resolve,reject) => 
            db.collection("propertyCollection").find().limit(10).toArray((err,docs) => {
                if (err) reject(err)
                resolve(docs)
            }))
    }
    return propertyData().then(res => res).catch(err => err)
}
