<template>
    <section class="case-studies" id="case-studies-section">
        <div class="container">
            <div class="row grid-margin">
                <div class="col-12 text-center pb-5">
                    <h2>Our case studies</h2>
                    <h6 class="section-subtitle text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
                </div>
                <div class="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0"
                v-for="(card, index) in cards" :key="index">
                    <div class="card color-cards">
                        <div class="card-body p-0">
                            <div class="text-center card-contents" :class="card.background">
                                <div class="card-image">
                                    <img class="case-studies-card-img" :src="getImage(card.image)" alt="image" />
                                </div>
                                <div class="card-desc-box d-flex align-items-center justify-content-around">
                                    <div>
                                        <h6 class="text-white pb-2 px-3">{{ card.title }}</h6>
                                        <button class="btn btn-white">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-details text-center pt-4">
                                <h6 class="m-0 pb-1">{{ card.field }}</h6>
                                <p>{{ card.key }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'CaseStudies',
    setup() {
        const cards = ref([
            {   
                image: 'Group95',
                title: 'Know more about Web Designing',
                field: 'Online Marketing',
                key: 'Seo, Marketing',
                background: 'bg-primary'
            },
            { 
                image: 'Group108', 
                title: 'Know more about Web Designing',
                field: 'Web Development',
                key: 'Developing, Designing',
                background: 'bg-warning'
            },
            { 
                image: 'Group126', 
                title: 'Know more about Web Designing',
                field: 'Web Development',
                key: 'Developing, Designing',
                background: 'bg-violet'
            },
            { 
                image: 'Group115', 
                title: 'Know more about Web Designing',
                field: 'Software Development',
                key: 'Developing, Designing',
                background: 'bg-success'
            }
        ])
        function getImage(img) {
            return require('../assets/img/about/' + img+ '.svg');
        }
        return {
            cards,
            getImage
        }
    }
}
</script>

<style lang="scss" scoped></style>