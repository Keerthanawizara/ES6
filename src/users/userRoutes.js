const Controller = require('./userController')
module.exports = [
    {method: 'POST',path: '/loginUser', handler: Controller.loginUserController}
];