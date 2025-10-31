function gestionarEmpleados(empleados) {
    const resultado = {};
    for (let emp of empleados) {
        if (!resultado[emp.area]) {
            resultado[emp.area] = { empleados: [], promedio: 0, totalSalarios: 0, cantidad: 0 };
        }
        resultado[emp.area].empleados.push(emp.nombre);
        resultado[emp.area].totalSalarios += emp.salario;
        resultado[emp.area].cantidad++;
    }
    for (let area in resultado) {
        const data = resultado[area];
        data.promedio = data.totalSalarios / data.cantidad;
        delete data.totalSalarios;
        delete data.cantidad;
    }
    return resultado;
}
const listaEmpleados = [
  { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
  { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
  { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
  { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];
console.log(gestionarEmpleados(listaEmpleados));
