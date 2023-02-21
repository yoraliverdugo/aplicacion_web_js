const app = Vue.createApp({
    data() {
        return {
            pokemones: null,
            loding: true, 

        }

    },
    mounted() {

        this.getpokemon()
    },
    methods: {
        async getpokemon() {
            this.loding = true;
            // Metodos: 
            //Post crear
            //Get obtener
            //Put modififcar 
            //Delete eliminar 

            var i = 1;

            while (i <= 600) {

                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'Get'
                }); // Consumir la api 

                const datapokemon = await response.json();
                this.pokemones.push(datapokemon);

                //console.log(datapokemon.sprites.other.home.front_default) 
                i++;

            }
            this.loding = false;
        }

    }




}).mount('#app')