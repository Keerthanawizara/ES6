const hapi = require('hapi')
//const routes = require('./src/users/userRoutes')

const server = hapi.server({
    port: 4500,
    host: 'localhost'
})

const init = async () => {
    await server.start()
    console.log( `Server running at ${server.info.uri}`)
}


//server.route(routes)

process.on('unhandledRejection',(err) => {
    console.log(err)
    process.exit(1)
})

init();


//nodemailer sample test code

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'keerthirajme@gmail.com',
      pass: 'rajendran5'
    }
  });
  var mailOptions = {
    from: 'keerthirajme@gmail.com',
    to: 'r.keerthanait2@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  const uuidv1 = require('uuid/v1');
  uuidv1(); 
  console.log(uuidv1)

  const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
  ('Hello, World!', MY_NAMESPACE);
   // console.log(MY_NAMESPACE)

    const uuidv5 = require('uuid/v5');
    uuidv5('http://example.com/hello', uuidv5.URL);
    console.log(uuidv5)