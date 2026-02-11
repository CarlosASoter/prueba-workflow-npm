// 1. Error: Asignar un valor a una variable que no existe (no-undef)
variableInexistente = 'Esto va a fallar';

// 2. Error: Definir algo y nunca usarlo (no-unused-vars)
const nombre = 'Carlos';

// 3. Error: Comparaciones inútiles o erróneas (no-self-compare)
if (10 === 10) {
  // 4. Error: Bloques vacíos (no-empty)
}

// 5. Error: debugger activo (no-debugger)
// Esto es un pecado mortal en producción
debugger;

// 6. Error: Usar 'var' y redeclarar (no-redeclare)
var saludo = 'Hola';
var saludo = 'Hola de nuevo';
