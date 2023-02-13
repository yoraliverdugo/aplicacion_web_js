Vue.createApp({
    data() {
        return{ 
            fruta:''
        } 
    }, 
    computed: {
        frutas() {
            if(this.fruta == "opcion1"){

                return "https://th.bing.com/th/id/OIP.jc068ISPd123C9SXD6CaJwHaE8?pid=ImgDet&rs=1" 

            } else if (this.fruta == "opcion2"){ 

                return "https://www.show.news/__export/1567201752167/sites/debate/img/2019/08/30/gato_png_crop1567201738546.jpg_839202635.jpg"

            } else if (this.fruta == "opcion3"){
                return "https://th.bing.com/th/id/R.091405999e3efb51ac07a578e8d7f4e3?rik=PldoLsV1W6pxDQ&pid=ImgRaw&r=0"
            } 
            else if(this.fruta == "opcion4"){
                return "https://64.media.tumblr.com/f1ee5f169563376cbb1871c327ff2f14/a9874b93391c764e-2f/s512x512u_c1/e6f4779023d4875ba5b1a515641c5a18596d06bb.jpg"
            }
            else if(this.fruta == "opcion0"){
                return "https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2022/03/Flork-19.png?fit=1548%2C1766&ssl=1"
            }
        }
    }

       
}).mount('#app')