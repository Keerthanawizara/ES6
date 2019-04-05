const csvFilePath=('./propertydata.csv')
const dbConfig = require('../dbConfig')
const mongojs = require('mongojs')
const csv=require('csvtojson')
const db = mongojs(dbConfig.db)
const FilePath=()=>{
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
	db.collection(dbConfig.collection).insert(jsonObj);
    //console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
    })
 }
// Async / await usage
const jsonArray= csv().fromFile(csvFilePath);
FilePath()
 
module.export = {
	FilePath
}