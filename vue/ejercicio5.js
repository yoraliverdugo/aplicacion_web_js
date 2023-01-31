Vue.createApp({
    data() {
        return{ 
            fruta:''
        } 
    }, 
    computed: {
        frutas() {
            if(this.fruta == Tomate){

                return <img src="https://th.bing.com/th/id/OIP.jP2VYVGUy-fX0djlFDZGfAHaE6?pid=ImgDet&rs=1" alt=""></img>

            } else if (this.fruta == Pera){ 

                return <Img src="https://th.bing.com/th/id/OIP.u7hCosLuiV3lwGxlIUGNAwHaGK?pid=ImgDet&rs=1"></Img>

            } else (this.fruta == Manzana){
                return <img src="https://megaredil.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk1UIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--af10f68261f34a74eb9c6ea73d59707018d1057c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/176.jpg?locale=es"></img>
            }
        }
    }

       
}).mount('#app')