
 Vue.createApp({
data() {
    return {
        edad: true 
        
    }
},  

methods: {
    
    mayorE(){

        var edad = prompt('Ingrese su edad');
        if (edad >= 18){
            this.edad = true
            console.log("♥")
        } 
        else if (edad <= 17) {
            this.edad = false
            console.log('Nah Creo(8')
        }

    }, 

    

},

 }).mount('#app') 