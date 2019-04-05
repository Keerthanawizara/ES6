const dbConfig = require('../dbConfig')
const mongojs = require('mongojs')
const csv=require('csvtojson')


const fileUpload = (req,h) => {
  const db = mongojs(dbConfig.db)
    const Upload = () => {
    csv()
        .fromStream(request.get('http://mywebsite.com/mycsvfile.csv'))
        .subscribe((json)=>{
        return new Promise((resolve,reject) => 
            db.collection("fileuploadcollections").insert(json),((err,docs) => {
                if (err) reject(err)
                resolve(docs)
            }))                                
    }
    return Upload().then(res => res).catch(err => err)
}

module.exports ={
	fileUpload
}
         