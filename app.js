new Vue({
    el: '#app',
    data: {
        running: false,
        hunterLife: 100,
        monsterLife: 100,
        criticalLife: 40,
    },
    computed: {
        hasResult() {
            return this.hunterLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.hunterLife = 100
            this.monsterLife = 100

        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        attack(tecnic) {
            this.hurt('hunterLife', 6, 12, tecnic)
            this.hurt('monsterLife', 5, 10, tecnic)
        },
        hurt(player, min, max, tecnic) {
            const plus = tecnic === 'kick' ? this.getRandom(min, max) : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[player] = Math.max(this[player] - hurt, 0)
        },
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})