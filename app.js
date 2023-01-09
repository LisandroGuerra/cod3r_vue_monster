new Vue({
    el: '#app',
    data: {
        playerLife: 40,
        monsterLife:10,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {

    },
    watch: {

    }
})