const arr = [10, "talha", true, getAge(), {ten : 10}, [10, 10]];

function getAge() {
    return 20;
}

console.log(arr);

// Array of object 
const channels = [
    {name : "stack learner", url : "https://youtube.com/stacklearner"},
    {name : "wes bos", url : "https://youtube.com/wesbos"},
];

console.log(channels);

// Array of functions 

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const product = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const func = [sum, sub, product, div, mod];
const a = 20, b = 10;

for (let i = 0; i < func.length; i++)
    console.log(func[i](a, b));