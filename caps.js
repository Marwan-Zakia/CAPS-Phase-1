'use strict';
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const faker = require('faker');
const customer = faker.name.findName();
const address = faker.address.cityName();
const store = '1-206-flowers';
const orderID = faker.datatype.uuid();
const caps = require('socket.io')(PORT);
// const fire = caps.of('/caps');

caps.on('connection', (socket) => {
    console.log('CONNECTED', socket.id);
    let order ={
        customer:customer,
        address : address,
        store:store,
        orderID: orderID}
        
    socket.on('pickup',(payload)=> {
       console.log('event',{
                 event: 'pickup',
                 time: new Date(),
                 payload : payload
             });
             caps.emit('pickup',order);
     })
     socket.on('in-transit',(payload) =>{
       console.log({
                 event: 'in-transit',
                 time: new Date(),
                 payload: payload
             });
              caps.emit('in-transit',order)
     })
     
     socket.on('delivered',(payload)=>{
        console.log({
            event: 'delivered',
            time: new Date(),
            payload: payload
          });   
          caps.emit('delivered',order)
          
      })
})