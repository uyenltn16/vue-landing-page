<template>
    <Modal>
        <template #title> Contact Us </template>
        <template #body>
            <div class="modal-body">
                <form method="POST" action="" @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Name">
                        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>

                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Email">
                        <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                    </div>
                    <div class="form-group">
                        <label for="Message">Message</label>
                        <textarea v-model="form.message" class="form-control" id="Message" placeholder="Enter your Message"></textarea>
                    </div>
                    <button class="btn btn-success" type="submit">Submit
                    </button>
                </form>
            </div>
        </template>
    </Modal>
</template>

<script >
import { reactive, toRef, ref} from 'vue';

import Modal from './Modal.vue';
export default {
    name: 'ModalFormContact',
    components: {
        Modal
    },
    props: {
        ModalOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup(props,{ emit }) {
        const form = reactive({
            name: '',
            email: '',
            message: '',
        })
        const errors = reactive({
            name: null,
            email: null,
        })
        function closeModal() {
            document.body.style.overflow = 'auto';
            emit('close');
        }
        function handleSubmit(e){
            this.errors.name = null;
            this.errors.email = null;
            const nameRegex = /^[A-Za-z\s]+$/;
            
            if (!this.form.name) {
                this.errors.name = 'Name is required.';
            } else if (!nameRegex.test(this.form.name)) {
                this.errors.name = 'Name must contain only letters and spaces.';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email) {
                this.errors.email = 'Email is required.';
            } else if (!emailRegex.test(this.form.email)) {
                this.errors.email = 'Please enter a valid email address.';
            }

            if (!this.errors.name && !this.errors.email) {
                e.preventDefault();
                console.log('Form Submitted:', this.form);
                closeModal();
            }
        }
        return {
            form,
            errors,
            closeModal,
            handleSubmit,
        };
    }
}
</script>

<style lang="scss" scoped></style>