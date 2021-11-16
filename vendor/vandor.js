'use strict';
const io = require('socket.io-client');
const host = 'http://localhost:3001/caps';
const capsConnection = io.connect(host);
const faker = require('faker');
const customer = faker.name.findName();
const address = faker.address.cityName();
const store = '1-206-flowers';
const orderID = faker.datatype.uuid();
capsConnection.on('getAllDelivered')
const data=setInterval(() => {
let order ={
    customer:customer,
    address : address,
    store:store,
    orderID: orderID}
    
   capsConnection.emit('pickup',order);
}, 2000);

capsConnection.on('delivered',(payload)=>{
console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
capsConnection.on('allDelivered')
})

setTimeout(()=>{
clearInterval(data)
},30000)



/* const io = require('socket.io-client');
const host = 'http://localhost:3001';
const capsConnection = io.connect(host);
const faker = require('faker');
const customer = faker.name.findName();
const address = faker.address.cityName();
const store = '1-206-flowers';
const orderID = faker.datatype.uuid();
const data=setInterval(() => {
    let order ={
    customer:customer,
    address : address,
    store:store,
    orderID: orderID}
   capsConnection.emit('pickup',order);
}, 2000);


capsConnection.on('delivered',(payload)=>{
console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
})
setTimeout(()=>{
clearInterval(data)
},30000)
 */
   


