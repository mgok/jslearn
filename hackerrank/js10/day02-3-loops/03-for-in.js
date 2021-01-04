'use strict';
process.stdin.on('data', function (data) {
    main(String(data).trim().split(new RegExp("[\n]+")));
});
/**** Ignore above this line. ****/

class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}

function main(input) {
    var monster = new Monster(input[0], input[1], input[2]);

    // Print array
    console.log(monster);

    // Print each of its elements on a new line
    for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }
}