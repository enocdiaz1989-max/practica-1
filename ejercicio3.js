const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const COMISION = 0.05;
const MESEROS = 3;

rl.question('Ingresa las propinas del Mesero 1: ', (entrada1) => {

    let mesero1 = parseFloat(entrada1);

    rl.question('Ingresa las propinas del Mesero 2: ', (entrada2) => {

        let mesero2 = parseFloat(entrada2);

        rl.question('Ingresa las propinas del Mesero 3: ', (entrada3) => {

            let mesero3 = parseFloat(entrada3);

            let montoTotal = mesero1 + mesero2 + mesero3;

            let comisionAdministrativa = montoTotal * COMISION;

            let montoNeto = montoTotal - comisionAdministrativa;

            let pagoIndividual = montoNeto / MESEROS;

            console.log('\n--- RESUMEN DE PROPINAS ---');
            console.log(`Monto Total Recolectado: $${montoTotal.toFixed(2)}`);
            console.log(`Comisión Administrativa: $${comisionAdministrativa.toFixed(2)}`);
            console.log(`Monto Neto a Repartir: $${montoNeto.toFixed(2)}`);
            console.log(`Pago para cada mesero: $${pagoIndividual.toFixed(2)}`);

            rl.close();
        });
    });
});