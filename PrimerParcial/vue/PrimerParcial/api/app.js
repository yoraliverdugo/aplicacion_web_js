Vue.createApp({
    data() {
        return {
            amiibos: [],
            
        }
    },
    methods: {
        async obtener() {

            const amiibooo = {
                nombre: this.nombre,
                gameseries: this.gameseries,
                amiiboSeries: this.amiiboSeries
            }
            this.amiibos.push(amiibooo);


            // el await es para cambiar la promesa a resultado
            const response = await fetch('https://www.amiiboapi.com/api/amiibo', {
                method: 'GET'
            });
            // sacar de la peticion el json(sacar los datos en donde viene la informacion)
            const data = await response.json();
            this.amiibos = data.amiibo;
        }
    },

}).mount('#app')