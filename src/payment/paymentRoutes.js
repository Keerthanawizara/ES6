const paymentCtrl = require('./paymentController')

module.exports = [
    {
     method: 'GET',
     path: '/paymentDataList',
     handler: paymentCtrl.paymentDataList
    },
    {
     method: 'POST',
     path: '/createPayment', 
     handler: paymentCtrl.createPayment},
    {
     method: 'GET', 
     path: '/paymentRecord/{id}', 
     handler: paymentCtrl.paymentRecord
    },
    {
     method: 'PUT', 
     path: '/paymentRecordUpdate/{id}', 
     handler: paymentCtrl. paymentRecordUpdate
    },
{
    method: 'DELETE', 
    path: '/paymentRecordDelete/{id}', 
    handler: paymentCtrl. paymentRecordDelete
}

];
