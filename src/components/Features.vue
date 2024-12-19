<template>
   <section class="py-6" id="features">
      <div class="container">
         <div class="row">
            <div class="col-md-6 mx-auto text-center">
               <h2>More than just a video recorder</h2>
               <p class="lead text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper.Nam liber
                  tempor cum soluta nobis eleifend option congue nihil imper.</p>
            </div>
         </div>
         <tab :tabs="tabs">
            <template #default="{ activeTab }">
               <div v-for="(tab, index) in tabs" :key="index"
                  :class="{ 'tab-pane fade': true, 'active show': activeTab === index }">
                  <img :src="getImage(tab.image)" alt="Tab Image" class="img-fluid d-block mx-auto" />
               </div>
            </template>
         </tab>
      </div>
   </section>
</template>

<script>
import Tab from './Tab.vue'
import { ref } from 'vue'
export default {
   name: 'Features',
   components: {
      Tab
   },
   setup() {
      const tabs = ref([
         {
            name: 'Light-weight video recorder',
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper.',
            image: 'feature-1'
         },
         {
            name: 'No 3rd-party dependency',
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper.',
            image: 'feature-2'
         },
         {
            name: 'Record in seconds',
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper.',
            image: 'feature-3'
         },
         {
            name: 'Share with your friends',
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imper.',
            image: 'feature-4'
         }
      ])
      const activeTab = ref(0);
      function getImage(img) {
         return require('../assets/img/' + img + '.png');
      }
      return {
         tabs,
         activeTab,
         getImage
      }
   }
}
</script>