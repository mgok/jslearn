/*function foo(a){
    console.log(a+b);
    b=a;
}

foo(2);
*/
//ReferenceError: b is not defined
/*"use strict";
function foo(a){
    b=a;
    console.log(a+b);
}

foo(2);
*/
//ReferenceError: b is not defined


function foo(a){
    b=a();
    console.log(a+b);
}

foo(2);
//TypeError: a is not a function