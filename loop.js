let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; 
    i++;
}
console.log(sum);

 




let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; 
    i++;
}
console.log(sum);

   



for (let i = 1; i <= 5; i++) {
    console.log(i);
}   



let numbers = [1, 2, 3, 4, 5];

// forEach → does not return new array
numbers.forEach(num => console.log(num * 2));

// map → returns a new array
let squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// filter → returns elements that match condition
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce → reduces array to single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
