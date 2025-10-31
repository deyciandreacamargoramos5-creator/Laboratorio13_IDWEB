const productos = new Map([
  ["pan", 2.5],
  ["leche", 3.2],
  ["huevos", 6.8],
  ["arroz", 4.5]
]);

function calcularTotal(lista) {
    let total = 0;
    for (let item of lista) {
        if (productos.has(item)) {
            total += productos.get(item);
        }
    }
    return total;
};
console.log(calcularTotal(["pan", "leche", "arroz"]));
