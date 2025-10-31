const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalles() {
        console.log("Auto: " + this.marca + " " + this.modelo + " (" + this.año + ")");
    }
};
auto.detalles();
