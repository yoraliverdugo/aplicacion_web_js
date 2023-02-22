
const app = Vue.createApp({
    data() {
        return {
            pokemones: [],
            loading: null,
            limit: 50,
            pokemondata: null
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
            while (i <= this.limit) {

                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                }); // Consumir la api 

                const datapokemon = await response.json();
                this.pokemones.push(datapokemon);

                //console.log(datapokemon.sprites.other.home.front_default) 
                i++;
            }
            this.loading = false;
        }

    },
    watch: {
        limit() {
            this.getpokemon();
        }
    }

}).mount('#app')