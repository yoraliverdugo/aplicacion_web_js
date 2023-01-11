const dia = prompt('Introduzca un numero del 1 al 7');
const DiadelaSemana = (dia) => {
    if (dia <1 || dia>7) {
        return 'Numero no valido'
    }
    
    else if (dia == 6) {
        return 'Sabado'
    }
    else if (dia == 5) {
        return 'Viernes'
    }
    else if (dia == 4) {
        return 'Jueves'
    }
    else if (dia == 3) {
        return 'Miercoles'
    }
    else if (dia == 2) {
        return 'Martes'
    }
    else if (dia == 1) {
        return 'Lunes'
    }
    
} 
const resultado = DiadelaSemana(dia);
console.log(resultado);
