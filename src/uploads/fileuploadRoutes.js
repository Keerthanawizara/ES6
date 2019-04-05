 const Controller = require('./fileUploadController')





module.exports ={

	    method: 'POST',
        path: '/FileUpload',
        handler: Controller.FileUpload
}