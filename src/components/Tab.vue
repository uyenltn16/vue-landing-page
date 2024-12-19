<template>
    <div class="row mt-5">
        <div class="col-md-4">
            <div class="nav flex-column nav-tabs nav-features">
                <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                    :class="{'nav-link' : true , 'active': activeTab === index }">
                    <div class="card card-body">
                        <h6>{{ tab.name }}</h6>
                        {{ tab.text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8 my-auto">
            <div class="tab-content">
                <slot :active-tab="activeTab"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'
    export default {
    props: {
        tabs: {
            type: Array,
            required: true
        }
    },
    setup() {
        const activeTab = ref(0);
        return {
            activeTab
        }
    }
    };
</script>
