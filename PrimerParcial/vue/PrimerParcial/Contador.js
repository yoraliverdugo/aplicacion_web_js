Vue.createApp({
    data() {
        return {
            contador:0
        }
    },
    methods: {
        incrementar(){
            this.contador++;

        }, 
        Decrementar(){
            if (this.contador >0){
                this.contador--;
            }
            
            } 
        }
    }).mount('#app');  

