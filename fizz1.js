let number=15;

console.log(number%3 === 0 && number%5 ===0 
    ? 'FizzBuzz'
    :
    number%3 ==0
    ? 'Fizz'
    :number%5 ===0
    ? 'Buzz'
    :'nothing'
);