<template>
    <div v-if="page" class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    // props use Camel Case 
    // props: ['index'],
    // route should have a 'props: true' on route.js
    inject: ['$pages'],
    created() {
        // console.log(this.$route.params);
        this.page = this.$pages.getSinglePage(this.$route.params.index);
        
        this.$watch(() => this.$route.params, (newParams, prevParams) => {
            this.page = this.$pages.getSinglePage(newParams.index);
        });
    },
    data() {
        return {
            page: null
        }
    }
    // watch: {
    //     index(newIndex, oldIndex) {
    //         this.page = this.$pages.getSinglePage(newIndex.index);
    //     }
    // }
}
</script>
