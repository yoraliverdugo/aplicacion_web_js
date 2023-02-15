//Formato jason
const persona = {
nombre:'Yorali',
edad: 20,
genero:'Femenino',
estatura: 1.62,
colorfav:'Morado',
colorcabello:'Cafe oscuro'
} 
 /* el punto que se pone despues de 
persona es para mandar a llamar a una sola variable*/
 

/*const nombre = persona.nombre;
const edad = persona.edad
const genero = persona.genero;
const estatura = persona.estatura;
const colorfav = persona.colorfav; 
const colorcabello = persona.colorcabello; */

// estamos concatenando variables 
console.log(`mi nombre es ${nombre} tengo ${edad}, me genero es ${genero},
mi estatura es ${estatura},
 mi color favorito es ${colorfav} 
 y mi color de cabello es ${colorcabello}`) 

 const{nombre, edad, genero, estatura, colorfav,colorcabello} = persona;

 