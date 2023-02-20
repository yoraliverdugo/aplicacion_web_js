Vue.createApp({
    data() {
        return {
            curso: [],
            nombre: "",
            descripcion: "",
            precio: 0,
            cantidad: 0,
            url: "",
            total: 0


        }
    },
    methods: {

        agregar() {
            const descripcioncurso = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio,
                cantidad: this.cantidad,
                url: this.url
            }
            this.curso.push(descripcioncurso)
            this.total = this.total + descripcioncurso.precio * descripcioncurso.cantidad

        }

    }


}).mount('#app') 