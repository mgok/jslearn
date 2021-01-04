/*function foo(str, a){
    eval(str);
    console.log(a,b);
}

var b = 2;

foo("var b = 3;", 1);

// 1 3

/*Improper use of eval opens up your code for injection attacks

Debugging can be more challenging (no line numbers, etc.)

eval'd code executes slower (no opportunity to compile/cache eval'd code)
*/
/*
var obj = {
    a: 1,
    b: 2,
    c: 3
};

obj.a = 2;
obj.b = 3;
obj.c = 4;

with(obj){
    a=3;
    b=4;
    c=5;
};

*/
/*
function foo(obj){
    with(obj){
        a=2;
    }
}

var o1 = {
    a:3
}

var o2 = {
    b:3
}

foo(o1);
console.log(o1.a);

foo(o2);
console.log(o2.a);

console.log(a);

/* 2
 * undefined
 * 2
 * Let’s now see why console.log( a ) causes 2 to be available in the global scope.
 * when with takes in an object, it creates a whole new lexical scope of that object.
 * We know it is a lexical scope because the object will now obey the rules of lexical scope.
 * i.e LHS and RHS look-up.
 */


    function foo(arg) {
        with(arg) {
            console.log("arg: "+arg)
        }
    }
    foo("Hello");
    foo({});
    foo({ arg:  "Hello"});

    /*
    arg: Hello
    arg: [object Object]
    arg: Hello
     */

/*
https://2ality.com/2011/06/with-statement.html
Performance: one cannot optimize the access to arg (or to any other variable
used inside with), because one cannot predict whether arg will refer to a real
variable or to a property inside the with argument. That can change with each call.
Security: you cannot determine what an identifier refers to by looking at its
 syntactic surroundings (its lexical environment). According to Brendan Eich
 that was the actual reason why with was deprecated, not performance considerations.
  Quoting a tweet of his:
with violates lexical scope, making program analysis (e.g. for security) hard to infeasible.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with
Pro: The with statement can help reduce file size by reducing the need to repeat a
lengthy object reference without performance penalty. The scope chain change required
by 'with' is not computationally expensive. Use of 'with' will relieve the interpreter
of parsing repeated object references. Note, however, that in many cases this benefit can
be achieved by using a temporary variable to store a reference to the desired object.

Contra: The with statement forces the specified object to be searched first for all name
lookups. Therefore all identifiers that aren't members of the specified object will be
found more slowly in a 'with' block. Where performance is important, 'with' should only
be used to encompass code blocks that access members of the specified object.


 */