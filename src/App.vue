<template>
    <!-- NavBar Start -->
    <navbar></navbar>
    <!-- Note: formerly nav-bar tag, updated to just 'navbar'
    -> 'nav-bar' caused a native custome element error -->
    <!-- NavBar End -->

    <router-view></router-view>

    <!-- <div v-show="false">hide this content</div> -->

    <!-- components have 'props' that we can pass data to -->
    <!-- <page-content 
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-content>

    <create-page
        @page-created="pageCreated"
    ></create-page> -->
</template>

<script>
    import Navbar from './views/Navbar.vue';

    export default {
        components: {
            Navbar
        },
        methods: {
            // async getPages() {
            //     let res = await fetch('pages.json');
            //     let data = await res.json();

            //     this.pages = data;
            // },
            pageCreated(pageObj) {
                this.pages.push(pageObj);
            }
        }
    }
</script>
