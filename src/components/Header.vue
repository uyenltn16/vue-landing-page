<template>
    <header class="py-6 py-md-7" id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-8 mx-auto text-center">
                    <h1>Phantom for Chrome</h1>
                    <p class="lead mt-3 mb-4">Phantom's Chrome extension helps you quickly record any video while your
                        are browsing your favorite site.</p>
                    <a href="#" class="btn btn-primary d-inline-flex flex-row align-items-center">
                        <vue-feather type="chrome" class="mr-2" size="20"></vue-feather>
                        Add to Chrome
                        <small class="ml-2">(It's free)</small>
                    </a>
                    <div class="rating-stars mt-4">
                        <font-awesome-icon :icon="['fa', 'star']" />
                        <font-awesome-icon :icon="['fa', 'star']" />
                        <font-awesome-icon :icon="['fa', 'star']" />
                        <font-awesome-icon :icon="['fa', 'star']" />
                        <font-awesome-icon :icon="['fa', 'star-half-alt']" />
                    </div>
                    <p class="text-muted small">
                        (150,000+ <a href="#" class="text-muted">reviews</a> by 1.5 million users)
                    </p>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-9 mx-auto text-center">
                    <img class="img-fluid img-raised d-block mx-auto rounded" src="../assets/img/bg.jpg" alt="Mockup" />
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-9 mx-auto">
                    <div class="row">
                        <div class="col-md-4 col-6">
                            <div class="media d-flex align-items-center flex-row justify-content-center">
                                <vue-feather type="chrome" class="text-muted mr-3" size="40"></vue-feather>
                                <div class="media-body">
                                    <h4 class="text-muted mb-1 d-block odometer">1,500,000</h4>
                                    <span class="text-muted small-xl">chrome installations</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-6">
                            <div class="media d-flex align-items-center flex-row justify-content-center">
                                <vue-feather type="video" class="text-muted mr-3" size="40"></vue-feather>
                                <div class="media-body">
                                    <!-- <h4 class="text-muted mb-1 d-block odometer-video">785,541,987</h4> -->
                                    <h4 class="text-muted mb-1 d-block odometer-video">
                                        <OdometerComponent></OdometerComponent>
                                    </h4>
                                    <span class="text-muted small-xl">videos recorded</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-6 mx-auto mt-4 mt-md-0">
                            <div class="media d-flex align-items-center flex-row justify-content-center">
                                <vue-feather type="heart" class="text-muted mr-3" size="40"></vue-feather>
                                <div class="media-body">
                                    <div class="rating-stars inverse mb-1">
                                        <font-awesome-icon :icon="['fa', 'star']" />
                                        <font-awesome-icon :icon="['fa', 'star']" />
                                        <font-awesome-icon :icon="['fa', 'star']" />
                                        <font-awesome-icon :icon="['fa', 'star']" />
                                        <font-awesome-icon :icon="['fa', 'star-half-alt']" />
                                    </div>
                                    <span class="text-muted small-xl">150,000+ reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import OdometerComponent from './Odometer.vue'
export default {
    name: "Header",
    components: {
        OdometerComponent
    }
};
</script>