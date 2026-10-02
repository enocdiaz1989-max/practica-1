const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const TASA_CAMBIO = 0.92;
const COMISION = 0.03;

rl.question('Ingresa el monto en Dólares (USD): ', (entrada) => {

    let montoInicial = parseFloat(entrada);

    let costoComision = montoInicial * COMISION;

    let montoNeto = montoInicial - costoComision;

    let totalEuros = montoNeto * TASA_CAMBIO;

    console.log('\n--- CONVERSIÓN DE MONEDA ---');
    console.log(`Monto Inicial: $${montoInicial.toFixed(2)} USD`);
    console.log(`Comisión en USD: $${costoComision.toFixed(2)} USD`);
    console.log(`Monto Convertido: $${montoNeto.toFixed(2)} USD`);
    console.log(`Total recibido en Euros: €${totalEuros.toFixed(2)} EUR`);

    rl.close();
});