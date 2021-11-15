'use strict';
const events= require('./events');
require('./Vendor')
require('./Driver')


 events.on('pickup',pickup)
 function pickup(payload) {
    console.log('order');
    console.log({
              event: 'pickup',
              time: new Date(),
              payload : payload
          });
  }
  
  events.on('in-transit',inTransit)
  function inTransit(payload) {
    console.log({
              event: 'in-transit',
              time: new Date(),
              payload: payload
          });
  }
  
  
  let delivered=(payload) =>{
      console.log({
          event: 'delivered',
          time: new Date(),
          payload: payload
        });
        
    }
    events.on('delivered',delivered)
// EVENT { event: 'in-transit',
//   time: 2020-03-06T18:27:18.738Z,
//   payload:obj
//    }

// DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0

// VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0


// EVENT { event: 'delivered',

//   time: 2020-03-06T18:27:20.736Z,


//   payload:

//    obj }