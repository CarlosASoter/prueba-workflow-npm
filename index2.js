const persona = {
  nombre: 'Carlos',
  apellido: 'Lopez',
  edad: 30,
  profesion:
    'Desarrollador Full Stack con muchos años de experiencia en diferentes tecnologias modernas',
};

const saludar = (nombre) => {
  console.log(
    'Hola ' +
      nombre +
      ' bienvenido a este proyecto que tiene una linea extremadamente larga para romper el printWidth configurado en prettier'
  );
};

const numeros = [1, 2, 3, 4, 5];

numeros.map((n) => {
  return n * 2;
});

if (persona.edad > 18) {
  console.log('Es mayor de edad');
}
