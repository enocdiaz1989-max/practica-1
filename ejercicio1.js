const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PONDERACION1 = 0.30;
const PONDERACION2 = 0.30;
const PONDERACION3 = 0.40;

rl.question('Ingresa tu nombre: ', (nombre) => {

    rl.question('Ingresa la nota del Parcial 1: ', (entrada1) => {
        let parcial1 = parseFloat(entrada1);

        rl.question('Ingresa la nota del Parcial 2: ', (entrada2) => {
            let parcial2 = parseFloat(entrada2);

            rl.question('Ingresa la nota del Parcial 3: ', (entrada3) => {
                let parcial3 = parseFloat(entrada3);

                let notaFinal =
                    (parcial1 * PONDERACION1) +
                    (parcial2 * PONDERACION2) +
                    (parcial3 * PONDERACION3);

                console.log('\n--- REPORTE FINAL ---');
                console.log(`Estudiante: ${nombre}`);
                console.log(`Nota final: ${notaFinal.toFixed(2)}`);

                rl.close();
            });
        });
    });
});