const app = Vue.createApp({
    data() {
        return {
            filtroActivo: '' // Suele ser adecuado que los valores iniciales del estado de nuestra aplicación sean equivalente a un valor que "no haga nada"

        }
    },
    methods : {
        aplicarFiltro(tipoDulce) {
            console.log('Filtro aplicado: ', tipoDulce)
            this.filtroActivo = tipoDulce
        },
        mustShowItem(tipoDulce) {
            return !this.filtroActivo || tipoDulce == this.filtroActivo
        }
    }
})

app.mount('#store')