const intersection = require('./actions').intersection;
/*
const isArray=bodyKeys=>bodyKeys && Array.isArray(bodyKeys);
const isObject=body=>body && typeof body !== 'object';
*/

const bodyInsersectionWith = (action) => {
  // const body = requestBody;
   const body = Object.assign({},action.payload);
   console.log(body);
   switch(action.type) {
       case K.Intersection :
       case K.Difference :
       default :
           return body;
   }

};

bodyInsersectionWith({hello: 'world'});
