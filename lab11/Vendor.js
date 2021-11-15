'use strict';
const events = require('./events');
const faker = require('faker');
const customer = faker.name.findName();
const address = faker.address.cityName();
const store = '1-206-flowers';
const orderID = faker.datatype.uuid();
require('./actions')

const data=setInterval(() => {
    let order ={
    customer:customer,
    address : address,
    store:store,
    orderID: orderID}
   events.emit('pickup',order);
}, 6000);


events.on('delivered',(payload)=>{
console.log(`DRIVER: delivered up ${payload.orderID}`);
console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
})
setTimeout(()=>{
clearInterval(data)
},6000)