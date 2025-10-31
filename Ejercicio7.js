function contarPalabras(texto) {
    const palabras = texto.toLowerCase().split(" ");
    const map = new Map();
    
    for (let palabra of palabras) {
        map.set(palabra, (map.get(palabra) || 0) + 1);
    }
    return map;
};
console.log(contarPalabras("sol luna sol sol estrella luna"));
