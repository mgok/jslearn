// This creates a custom object named MyObject
class MyObject {
    // Each object of this type has an attribute named 'magic'
    constructor(magic) {
        this.magic = magic;
    }
    // We'll discuss this syntax in more detail later
}

// Create two objects
var variable1 = new MyObject(":)");
var variable2 = new MyObject(":)");

// Print the result of an equality comparison
console.log( variable1.magic + " == " + variable2.magic
            + " evaluates to "
            + (variable1 == variable2)
            );

// Set variable1 to reference the same object as variable2
variable1 = variable2;
// Print the result of an equality comparison
console.log( variable1.magic + " == " + variable2.magic
            + " evaluates to "
            + (variable1 == variable2)
            );