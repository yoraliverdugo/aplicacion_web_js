 Vue.createApp({
    data() {
        return {
            producto:'',
            carrito:[
                'Cebolla',
                'Tomate',
                'Apio',
                'Uvas',
                'Chile'
            
            ]
        }
    }, 
    methods: {
        agregar(){
            this.carrito.push(this.producto);
            this.producto = '';
        }
    }

}).mount('#app')