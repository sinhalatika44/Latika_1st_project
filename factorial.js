// Write a function which calculates factorial of a number
/*
factorial of 5 = 5x4x3x2x1
4 = 4x3x2x1
*/

// find square of a number using function

// find cube of a number using function

function factorial(num) {
    let f = 1;
    for(let i = 1; i <= num; i++) {
        // console.log(i);
        f = f*i;
    }
    console.log(f);
}

factorial(8);



function square(num) {
 return num * num;
}
const s = square(4);
console.log(s);

function cube(num) {
    return num * num * num;
}
const c = cube(2);
console.log(c);