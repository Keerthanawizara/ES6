const hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const DataBase = require('./src/dbConfig')
const paymentroutes = require('./src/payment/paymentRoutes')


const initializeDatabase = new DataBase()
initializeDatabase.connection()

const server = hapi.server({
    port: 6000,
    host: 'localhost'
})

const init = async () => {
    await server.register({
        plugin: HapiAxios,
        options: {
          instances: [
            {
              name: 'payment',
              axios: {
                baseURL: 'https://localhost:6000',
                // you can use any axios config here. https://github.com/axios/axios#creating-an-instance
              },
            },
          ],
        },
      });
   
    await server.start()
    console.log( `Server running at ${server.info.uri}`)
    
}

server.route({
    method: 'GET',
    path:'/',
    config: {
        auth: false
    },
    handler: (request, h) => {
        return `Welcome to Surepay API`
    }
})


server.route(paymentroutes)



process.on('unhandledRejection',(err) => {
    console.log(err)
    process.exit(1)
})

init()