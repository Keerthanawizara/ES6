const dbConfig = require('../dbConfig')
const mongojs = require('mongojs')

// //Create token function
// const GenerateToken=(data,callback)=>{
//     var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//     console.log(token)
//     console.log(data);return;

//}
//user login 
const loginUserController =  (request, h) => {
    console.log(request)
    const db = mongojs(dbConfig.db)
           return new Promise((resolve, reject)=> {
               db.collection(dbConfig.collection).find(request.payload).toArray((err, docs) => {
              if(err){
              return reject(err)
             //console.log(docs)
              }if(docs.length===0){
                  resolve({status:false,statuscode:400,message:"invalid username or password"})
              }else{
                  //GenerateToken(doc,(err,res)=>{
                
                     resolve({status:true,statuscode:200,message:"user available",data:docs})
                  //})
              }
            }); 
        })

    };

    module.exports = {
         loginUserController
    }


example code::

const userDataModel = require('./userModel')
const userAuthentication = require('../common/authenticator')
const uuid = require('uuid/v1')

const userAuthController = async (request) => {
    const userCredentials = request.payload
    try {
        if (userCredentials.username && userCredentials.password) {
            const userAuth = new userDataModel(userCredentials.username, userCredentials.password)
            const user = await userAuth.findUser()
            if (user[0]['_id']) {
                const userAuthToken = new userAuthentication()
                userAuthToken.setToken(uuid())
                return { login: "success", token: userAuthToken.getToken() }
            } else {
                return { login: "failure", status: "user not available" }
            }
        } else {
            return { login: "failure" }
        }
    } catch (e) {
        return e
    }
}

const userDataController = async (request) => {
    return "Hello"
} 

module.exports = { userAuthController, userDataController }





