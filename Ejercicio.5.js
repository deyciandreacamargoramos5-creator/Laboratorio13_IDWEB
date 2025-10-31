function tieneDuplicados(arr) {
    const elementos = new Set(arr);
    return elementos.size !== arr.length;
};
console.log(tieneDuplicados([1, 2, 3, 4]));
console.log(tieneDuplicados([1, 2, 2, 3]));