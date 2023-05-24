<template>
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">CapellaBPO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="(page, index) in pages" class="nav-item" :key="index">
                        <navbar-link
                        :page="page"
                        :isActive="activePage === index"
                        @click.prevent="navLinkClicked(index)"
                        ></navbar-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <!-- @click == toggle -->
                    <button 
                        class="btn btn-primary"
                        @click.prevent="changeTheme"
                    >Toggle</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    created() {
        this.getThemeSetting();
    },
    props: ['pages', 'activePage', 'navLinkClicked'],
    data() {
        return {
            theme: 'dark',
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light';

            if (this.theme == 'light') {
                theme = 'dark';
            }

            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');

            if (theme) {
                this.theme = theme;
            }
        }
    }
}
</script>
