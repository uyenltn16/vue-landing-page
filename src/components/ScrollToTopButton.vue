<template>
    <div :class="{ 'scroll-top': true, visible: visible }" @click="scrollToTop">
        <font-awesome-icon :icon="['fa', 'angle-up']" />
    </div>
</template>

<script>
import { ref,scrollToTop,handleScroll, onMounted, onUnmounted } from 'vue';
export default {
    name: "ScrollToTopButton",
    setup() {
        const visible = ref(false);
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        const handleScroll = () => {
            visible.value = window.scrollY > 200;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            visible,
            scrollToTop
        };
    }
};
</script>