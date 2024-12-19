<template>
    <section class="pt-6 bg-light" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-md-9 mx-auto">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-muted text-center">Frequently asked questions</h5>
                            <div class="row mt-4">
                                <div v-for="(faq, index) in faqs" :key="index" class="faq-item col-md-6 mb-4">
                                    <h6 @click="toggleFaq(index)" class="faq-question">
                                        <font-awesome-icon :class="{'icon-rotate': faq.isVisible}" class="icon" :icon="['fa', 'angle-up']" />
                                        {{ faq.question }}
                                    </h6>
                                    <div v-if="faq.isVisible" class="faq-answer text-muted">
                                        {{ faq.answer }}
                                    </div>
                                </div>
                            </div>
                            <div class="row text-center my-5">
                                <div class="col-lg-6 col-md-8 mx-auto">
                                    <div class="lead">Still have more questions?</div>
                                    <p class="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate
                                        conecus aut labore.</p>
                                    <a href="#" class="btn btn-primary btn-sm">
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Faq',
    setup() {
        const faqs = ref([
            { 
                question: 'Lorem ipsum dolor sit amet?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            { 
                question: 'Lorem sit andigen daepeditem amet?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            { 
                question: 'Lorem ipsum dolor sit andigen daepeditem amet?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            { 
                question: 'Lorem sit andigen daepeditem amet dem tumquam explabo?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            { 
                question: 'Lorem sit andigen daepeditem amet?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            { 
                question: 'Lorem sit daepeditem amet?', 
                answer: 'Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore. Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.', 
                isVisible: false },
            // Add more FAQ items here
        ])

        function toggleFaq(index) {
            faqs.value[index].isVisible = !faqs.value[index].isVisible;
        }

        return {
            faqs,
            toggleFaq
        }
    }
}
</script>

<style></style>