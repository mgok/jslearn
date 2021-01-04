var a = 10;

// Scope in Java and C++
{
    var a = 10;
}

// Scope in JavaScript not a scope
/*var name = "Mehmet";
if(name === "Mehmet"){
    var department = "Engineer";
}

console.log(name);
console.log(department);
*/
// function creates a scope in JS
var name= "Mehmet";

function allocateDepartment(){
    if(name === "Mehmet"){
        var department = "Engineering";
    }
}

allocateDepartment();
console.log(department); //ReferenceError: department is not defined