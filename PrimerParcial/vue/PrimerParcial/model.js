Vue.createApp({
    data() {
        return{ 
           
            edad:'',
            resultado:''
            
        } 
    }, 
    methods:{
        calcularedad(){ 
            if(this.edad >= 18) {
                this.resultado = 'Eres mayor :)';
            }
            else{
                this.resultado = 'Eres menor :(';
            }
         }
    }
}).mount('#app')