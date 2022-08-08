
console.log('latika');

const name1 = 'sipu';
console.log(name1);
if(name1 === 'latika') {
    console.log('name1 matches');
} else {
    console.log('name1 does not match');
}

function calculator(num1, num2, operator){
    if(operator === '+') {
        return num1 + num2;
    } else if(operator === '-') {
        return num1 - num2;
    } else if(operator === '/') {
        return num1 / num2;
    } else if(operator === '*') {
        return num1 * num2;
    } else {
        return 'Invalid operator';
    }
}

const result = calculator(7, 4, '+');
console.log('result is >> ', result);
const sentence = "This is a beautiful sentence and I am checking her knowledge";
const words = sentence.split(' '); //split converts string to array or breaks string using a separator
console.log(words, words.length);
const new_sentence = words.join(' '); //converts array to string with joining separator
console.log(new_sentence);


const time_12h = '12:30 PM';
const [time, modifier] = time_12h.split(' ');
console.log(time, modifier);
let [hour, minutes] = time.split(':');
console.log(hour);