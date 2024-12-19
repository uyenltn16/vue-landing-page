<template>
    <div :class="{'card text-center' : true, 'bg-dark': card.type === 'Professional' }" v-for="(card, index) in cards" :key="index">
        <div class="card-body">
            <h5 class="card-title pt-3">{{ card.type }}</h5>
            <h2 class="card-title display-4 text-primary pt-4">{{ card.price }}</h2>
            <div class="text-muted lead mt-4">per user / month</div>
            <ul class="list-unstyled pricing-list">
                <li v-for="(detail, index) in card.details" :key="index">{{ detail }}</li>
            </ul>
            <template v-if="card.type === 'Basic'">
                <a href="#" class="btn btn-outline-primary d-inline-flex flex-row align-items-center">
                    <vue-feather type="chrome" class="mr-2" size="20"></vue-feather>
                    Add to chrome
                </a>
            </template>
            <template v-else>
                <a href="#" class="btn btn-primary">Upgrade to premium</a>
            </template>
            
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: "PricingItem",
        setup() {
            const cards = ref([
                {   
                    type: 'Basic',
                    price: 'Free',
                    details: ['10 videos', '5 minutes length limit', 'Phantom branding' , 'Basic support']
                },
                { 
                    type: 'Professional', 
                    price: '$12',
                    details: ['Unlimited videos', '100 minutes length limit', 'No Phantom branding' , 'Premium support']
                }
            ])
            return {
                cards
            }
        }
    }
</script>

<style lang="scss" scoped></style>