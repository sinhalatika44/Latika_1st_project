const number = 10;

function isPrime(num) {
    let counter = 0;
	for(let i = 1; i <= num; i++) {
        if(num % i === 0) { // % is modulus to find remainder
            counter++; //counter to check if divisible only twice
        } else {
            //do nothing
        }
    }
    if(counter === 2 || counter === 1) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is not a prime number`);
    }
}

// isPrime(29);

for(let j = 1; j <= 30; j++) {
    isPrime(j);
}