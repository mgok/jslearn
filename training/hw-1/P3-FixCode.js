/*function setB(a) {
    const b = a+3;
    function setC() {
        function setD(){
            d = c+3;
            const d; //const hoisting yapılamaz
        }
        const c = b+3;
        setD();
    }
    setC();
    b +=7;//Const değişmez
}
setB(a);//Global creation da a yok Reference error
//ReferenceError: a is not defined
*/
var a;
function setB(a) {
    let b = a+3;
    function setC() {
        var c = b+3;
        function setD(){
            d = c+3;
            var d; //const hoisting yapılamaz
        }
        setD();
    }
    setC();
    b +=7;//Const değişmez
    console.log(a);
    console.log(b);
//    console.log(c); //ReferenceError: c is not defined
//    console.log(d); //ReferenceError: d is not defined
}
a = 1;
setB(2);//Global creation da a yok Reference error
console.log("a:" + a);
//ReferenceError: a is not defined