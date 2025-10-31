function contarLetras(texto) {
    const resultado = {};
    const str = texto.toLowerCase();
    for (let letra of str) {
        resultado[letra] = (resultado[letra] || 0) + 1;
    }
    return resultado;
};
console.log(contarLetras("banana"));
