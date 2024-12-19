<template>
    <Header />
    <Press />
    <Features />
    <Pricing />
    <Faq />
</template>

<script>
import Faq from '@/components/Faq.vue';
import Features from '@/components/Features.vue';
import Header from '@/components/Header.vue';
import Press from '@/components/Press.vue';
import Pricing from '@/components/Pricing.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Press,
        Features,
        Pricing,
        Faq,
    }
}
</script>