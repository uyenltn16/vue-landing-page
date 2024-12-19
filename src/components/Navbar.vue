<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top sticky-navigation">
        <router-link class="navbar-brand" to="/">
            Phantom
        </router-link>
        <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
            aria-label="Toggle navigation">
            <vue-feather type="menu" size="24"></vue-feather>
        </button>
        <div class="collapse navbar-collapse navbar-menu-wrapper" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="item in navList" :key="item.id" >
                    <router-link class="nav-link page-scroll" :to="{ path: item.path, hash: item.hash }">
                        {{ item.text }}
                    </router-link>
                </li>
                <li class="nav-item btn-contact-us pl-lg-0">
                    <button class="btn btn-info" @click="openModal">Contact Us</button>
                    <ModalFormContact :ModalOpen="isModalOpen" v-if="isModalOpen" @close="closeModal"/>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue'
import ModalFormContact from './ModalFormContact.vue';
export default {
    name: 'Navbar',
    components: {
        ModalFormContact
    },
    setup() {
        let isModalOpen = ref(false)
        const navList = ref([
            { id: 0, text: 'Features', hash: "#features", path: "/" },
            { id: 1, text: 'Pricing', hash: "#pricing", path: "/" },
            { id: 2, text: 'FAQ', hash: "#faq", path: "/" },
            { id: 3, text: 'About', path: "/about" },
            { id: 4, text: 'Blog', hash: "#blog", path: "/about" },
            { id: 5, text: 'Testimonials', hash: "#testimonials", path: "/about" },
        ])
        function openModal() {
            isModalOpen.value = true;
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            document.body.style.overflow = 'auto';
            isModalOpen.value = false;
        }
        return {
            closeModal,
            isModalOpen,
            openModal,
            navList,
        }
    }
}
</script>
