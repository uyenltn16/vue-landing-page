<template>
   <BannerAbout />
   <Overview />
   <DigitalMarketing />
   <CaseStudies />
   <Customer />
</template>
<script>
import BannerAbout from '@/components/BannerAbout.vue';
import CaseStudies from '@/components/CaseStudies.vue';
import Customer from '@/components/Customer.vue';
import DigitalMarketing from '@/components/DigitalMarketing.vue';
import Overview from '@/components/Overview.vue';

export default {
    name: 'About',
    components: {
        BannerAbout,
        Overview,
        DigitalMarketing,
        CaseStudies,
        Customer
    }
}
</script>