var sum = 0;

for (var i = 0; i < (process.argv.length - 2); i++) {
    sum += +process.argv[i + 2];
}

console.log(sum);