const operations = ["++X","++X","X++"];

const finalValueAfterOperations = function(operations){
    const finalValue = operations.reduce((acc, op) => op.includes('+') ? acc + 1 : acc - 1, 0);
    return finalValue
}

console.log(finalValueAfterOperations(operations))