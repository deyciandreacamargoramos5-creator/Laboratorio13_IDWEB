function filtarYTransformar(arr){
    return arr
    .filter(num => num >= 0)
    .map(num => num ** 2)
    .reduce((suma, n) => suma + n, 0);
}
console.log(filtarYTransformar([2, -3, 4, -1, 5]));