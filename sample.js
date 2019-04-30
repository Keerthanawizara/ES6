
const Hapi = require('hapi');
const axios = require('axios');
const HapiAxios = require('hapi-axios');
 
const server = new Hapi.Server({
  host: 'localhost',
  port: 4000,
});
const init = async () => {

 await server.register({
  plugin: HapiAxios,
  options: {
    instances: [
      {
        name: 'typicode',
        axios: {
          baseURL: 'https://jsonplaceholder.typicode.com',
          // you can use any axios config here. https://github.com/axios/axios#creating-an-instance
        },
      },
    ],
  },
});
 
await server.start();
console.log( `Server running at ${server.info.uri}`)
}
server.route({
  handler: async (request, h) => {
    const { typicode }  = request.server.plugins['hapi-axios'];
    const { data } = await typicode.get('users');
    // GET https://jsonplaceholder.typicode.com/users
    return h.response(data);
  },
  method: 'GET',
  path: '/users',
});
process.on('unhandledRejection',(err) => {
  console.log(err)
  process.exit(1)
})

init()

