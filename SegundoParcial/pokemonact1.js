const app = Vue.createApp({
    data() {
        return {
            pokemon: null

        }



    },
    methods: {
        async getpokemon() {
            // Metodos: 
            //Post crear
            //Get obtener
            //Put modififcar 
            //Delete eliminar
            const valor = Math.floor(Math.random() * 500);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + valor, {
                method: 'Get'
            }); // Consumir la api 

            const datapokemon = await response.json();
            this.pokemon = datapokemon;

            //console.log(datapokemon.sprites.other.home.front_default)

        }

    }


}).mount('#app')