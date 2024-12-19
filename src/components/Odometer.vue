<template>
    <Vue3Odometer :value="value" :duration="1000"  format="(,ddd)"/>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Vue3Odometer from 'vue3-odometer'

export default {
    name: "OdometerComponent",
    components: {
        Vue3Odometer
    },
    setup() {
        const value = ref(100)
        let intervalId = ref(1000)

        onMounted(() => {
            intervalId = setInterval(() => {
                value.value += Math.floor(Math.random() * 100) + 1 // increment by a random number
            }, 1000) // increment every second
        })

        onBeforeUnmount(() => {
            clearInterval(intervalId)
        })

        return {
            value
        }
    }
};
</script>



<style>
</style>