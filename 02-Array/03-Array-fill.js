const a = new Array(10);

a.fill(1);

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

const response = new Array(5);
response.fill(false);

for (let i = 0; i < response.length; i++) {
    const rand = Math.floor(Math.random() * 10 + 1);

    response[i] = rand;
}

console.log(response);