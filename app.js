new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 90,
        monsterLife: 40,
        criticalLife: 40,
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