<template>
    <!-- NavBar Start -->
    <navbar
        :pages="pages"
        :active-page="activePage"
        :nav-link-clicked="(index) => activePage = index"
    ></navbar>
    <!-- Note: formerly nav-bar tag, updated to just 'navbar'
    -> 'nav-bar' caused a native custome element error -->
    <!-- NavBar End -->

    <!-- components have 'props' that we can pass data to -->
    <!-- <page-content 
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-content> -->

    <create-page
        :page-created="pageCreated"
    ></create-page>
</template>

<script>
    import Navbar from './components/Navbar.vue';
    import PageContent from './components/PageContent.vue';
    import CreatePage from './components/CreatedPage.vue';

    export default {
        components: {
            Navbar,
            PageContent,
            CreatePage
        },
        created() {
            this.getPages()
        },
        data() {
            return {
                activePage: 0, // data property
                pages: []
            };
        },
        methods: {
            async getPages() {
                let res = await fetch('pages.json');
                let data = await res.json();

                this.pages = data;
            },
            pageCreated(pageObj) {
                console.log(pageObj);
            }
        }
    }
</script>
