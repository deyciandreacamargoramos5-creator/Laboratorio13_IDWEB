function reordenarPalabras(oracion){
    return oracion 
    .toUpperCase()
    .split(" ")
    .sort();
}
console.log(reordenarPalabras("Sol luna estrella planeta"));