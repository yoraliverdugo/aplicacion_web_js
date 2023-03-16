const app = Vue.createApp({
    data() {
        return {
            productos: [],
            loading: true,
            limit: 50,
            productodata: null

        }

    },
    mounted() {

        this.getproductos()
    },
    methods: {
        async getproductos() {
            this.loading = true;
            // Metodos: 
            //Post crear
            //Get obtener
            //Put modififcar 
            //Delete eliminar 

            var i = 1;
            while (i <= this.limit) {

                const response = await fetch('https://fakestoreapi.com/products' + i, {
                    method: 'GET'
                }); // Consumir la api 

                const dataproductos = await response.json();
                this.productos.push(dataproductos); 
            

                //console.log(datapokemon.sprites.other.home.front_default) 
                i++;

            }
            this.loading = false;
        }

    },
    watch: {
        limit() {
            this.getproductos();
        }
    }




}).mount('#app')