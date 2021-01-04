function setB(a) { //a: setB scope
    var b = a+3;//b: setB scope
    function setC() {
        var c = b+3; //c: setC scope b: setB scope
        function setD(){
            var d = c+3; //d: setD scope c: setC scope
            console.log(a); // 4
            console.log(b); // 7
            console.log(c); // 10
            console.log(d); // 13
        }
        setD();
    }
    setC();
    //console.log(a); // 4
    //console.log(b); // 7
    //console.log(c); //ReferenceError: c is not defined
    //console.log(d); //ReferenceError: c is not defined
}
var a = 4; //global
setB(a); //global
    //console.log(a); // 4
    //console.log(b); //ReferenceError: b is not defined
    //console.log(c); //ReferenceError: c is not defined
    //console.log(d); //ReferenceError: d is not defined