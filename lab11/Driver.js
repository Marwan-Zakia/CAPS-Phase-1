'use strict';
const events= require('./events');

events.on('pickup',(order)=>{
setTimeout(()=>{
    console.log(`DRIVER: picked up ${order.orderID}` );
    events.emit('in-transit',order)
},2000)


 setTimeout(()=>{
 events.emit('delivered',order)
 },2500)
});
