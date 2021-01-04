//classical
var input = 10;
for (var i = 1; i <= input; i++) {
    process.stdout.write(i + " ");
}

//Initialize
var i = 1;

for (; i <= input; i++) {
    process.stdout.write(i + " ");
}

//Condition
for (var i = 1;; i++) {
    if (i > input) {
        break;
    }

    process.stdout.write(i + " ");
}

//Infinite loop
var i = 1;

for (;;) {
    if (i > input) {
        break;
    }

    process.stdout.write(i + " ");
    i++;
}