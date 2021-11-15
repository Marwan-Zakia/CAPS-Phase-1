
const io = require('socket.io-client');
const host = 'http://localhost:3001';
const fireConnect = io.connect(host);
// const fireConnect = io.connect(`${host}/caps`);
fireConnect.on('pickup',(order)=>{
    setTimeout(()=>{
        console.log(`DRIVER: picked up ${order.orderID}` );
        console.log(`DRIVER: delivered up ${order.orderID}`);
        fireConnect.emit('in-transit',order)
    },2000)
    
    
     setTimeout(()=>{
        fireConnect.emit('delivered',order)
     },2500)
    });
    
