
console.log(a);

  const obj = { };
  const array = [];
  const newObj = undefined;

  console.log(obj.id);// undefined
  console.log(newObj);// undefined
  console.log(array[0]);// undefined
 // console.log(obj[id] = id);// Reference Error

  /** here we get undefined **/
(function() {
  console.log(this.a);
})();

/** but here we get something like "Uncaught TypeError: Cannot read property 'a' of undefined" as we used "use strict" at the begining of the IIFE **/
(function() {
  'use strict';
  console.log(this.a);
})();