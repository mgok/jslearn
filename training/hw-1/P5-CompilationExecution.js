function setB(a) { //a: setB scope
    var b = a+3;//b: setB scope
    function setC() {
        var c = b+3; //c: setC scope b: setB scope
        function setD(){
            var d = c+3; //d: setD scope c: setC scope
        }
        setD();
    }
    setC();
}
var a = 4; //global
setB(a); //global

/*

Global Execution Context - Creation Phase
- Global Object: global
- a: undefined
- setB: function
Global Execution Context - Execution Phase
- a: 4
- Execute setB(a)
    Function Execution Context - Creation Phase
    - a: undefined
    - b: undefined
    - setC: function
    Function Execution Context - Execution Phase
    - a: 4
    - b: 7
    - Execute setC
        Function Execution Context - Creation Phase
        - c: undefined
        - setD: function
        Function Execution Context - Execution Phase
        - c: 10
        - Execute setD
            Function Execution Context - Creation Phase
            - d: undefined
            Function Execution Context - Execution Phase
            - d: 13
 */