<template>
    <section class="customer-feedback" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center pb-5">
                    <h2>What our customers have to say</h2>
                    <h6 class="section-subtitle text-muted m-0">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
                </div>
                <Carousel v-bind="settings" :breakpoints="breakpoints" class="grid-margin">
                    <Slide v-for="item in items" :key="item.id">
                        <div class="card customer-cards">
                            <div class="card-body">
                                <div class="text-center">
                                    <img class="img-customer" :src="getImage(item.image)" :alt="item.title" />
                                    <p class="m-0 py-3 text-muted">{{ item.description }}</p>
                                    <div class="content-divider m-auto"></div>
                                    <h6 class="card-title pt-3">{{ item.title }}</h6>
                                    <h6 class="customer-designation text-muted m-0">{{ item.position }}</h6>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from 'vue'
export default {
    name: 'Customer',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    setup() {
        const items = ref([
            { id: 1, image: "face1", title: "Tony Martinez", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
            { id: 2, image: "face2", title: "Cody Lambert", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
            { id: 3, image: "face3", title: "Sophia Armstrong", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
            { id: 4, image: "face4", title: "Cody Lambert", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
            { id: 5, image: "face5", title: "Sophia Armstrong", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
            { id: 6, image: "face6", title: "Cody Lambert", position: "Marketing Manager", description: "Lorem ipsum dolor sit amet, tincidunt vestibulum.Fusce egeabus consectetuer turpis, suspendisse." },
        ]);
        function getImage(img) {
            return require('../assets/img/about/' + img+ '.jpg');
        }
        return {
            items,
            getImage,
            settings: {
                itemsToShow:1,
                wrapAround: true,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                600: {
                    itemsToShow: 2,
                },
                // 1024 and up
                1000: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        };
    }
}
</script>

<style lang="scss" scoped></style>