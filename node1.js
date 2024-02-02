// let a=10;
// let b=10;
// let c=a+b;

// console.log("The addition of two number is: ",c);

// function addition(a,b) {
//     console.log("The addition of two number is: ",a+b);
// }

const readline = require('readline');

const rl = readline.createInterface({        
    input: process.stdin,
    output: process.stdout
});

function add() {
    rl.question("Enter the first number: ", function(a) {
        a = parseFloat(a);

        rl.question("Enter the second number: ", function(b) {
            b = parseFloat(b);

            if (!isNaN(a) && !isNaN(b)) {
                const sum = a + b;
                console.log("The addition of two numbers is:", sum);
            } else {
                console.log("Invalid input. Please enter valid numbers.");
            }

            rl.close();
        });
    });
}

add();

