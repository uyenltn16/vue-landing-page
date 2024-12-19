<template>
    <section class="pt-6 bg-light" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto text-center">
                    <h2>Simple pricing</h2>
                    <p class="lead text-muted">
                        Get started for free. No credit card required, cancel anytime.
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-9 mx-auto">
                    <div class="card-group pricing-table">
                        <PricingItem></PricingItem>
                    </div>
                </div>
            </div>
            <div class="row mt-6">
                <div class="col-md-6 mx-auto text-center">
                    <h4>100% money back guarantee.</h4>
                    <p class="text-muted mb-4">We know you're gonna love our professional services, but let us prove it.
                        If our service hasn't exceeded your expectations after 90 days, you'll get a full
                        refund. Simple as that.
                    </p>
                    <a href="#" class="btn btn-link d-flex flex-row align-items-center justify-content-center">
                        Get started now
                        <vue-feather type="arrow-right" class="ml-2"></vue-feather>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import PricingItem from './PricingItem.vue'
    export default {
        name: 'Pricing',
        components: {
            PricingItem
        },
        setup() {
            
        }
    }
</script>
