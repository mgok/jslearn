process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function classifyAge(age) {
    /* First, let's check the lower bound on our age range: */
    if (age < 13) {
        return age + " is a child.";
    }
    /* If this condition is checked, we know that age < 13 is false: */
    else if (age < 20) {
        return age + " is a teenager.";
    }
    /* If this condition is checked, we know both of these are false:
    *   age < 13 is false
    *   age < 20 is false
    *  This tells us that either age >= 20 is true, or age is not a number:
    */
    else if (age >= 20){
        return age + " is an adult.";
    }
    /* The input wasn't a number. */
    else {
        return "Your input must be an integer.";
    }
}

function main(input) {
    console.log(classifyAge(input));
}