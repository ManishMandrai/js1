let teaFlavors = ['green tea', 'black tea', 'dark tea']

const firstTea = teaFlavors[0]

console.log(firstTea);

let cities = ['London', 'Tokyo', 'Paris', 'New York']

const favotiteCities = cities[2]


let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.push(9)
numbers.unshift(0)
console.log(numbers);

numbers.pop()
numbers.shift()
console.log(numbers);

console.log(numbers.length)

console.log(numbers[2])

for(let i = 0; i < numbers.length; i++){
    console.log("Element at index", i, ":", numbers[i]);
    
}

numbers.forEach(num => console.log(num * 2));
