<template>
    <nav 
        :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">CapellaBPO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <navbar-link
                        v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                    ></navbar-link>

                    <li>
                        <router-link
                            to="/pages"
                            class="nav-link"
                            active-class="active"
                            aria-current="page" 
                        >Pages</router-link>
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
    inject: ['$pages', '$bus'],
    created() {
        this.getThemeSetting();

        this.pages = this.$pages.getAllPages();

        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()];
        });

        this.$bus.$on('page-created', () => {
            this.pages = [...this.$pages.getAllPages()];
        });

        this.$bus.$on('page-delete', () => {
            this.pages = [...this.$pages.getAllPages()];
        });
    },
    data() {
        return {
            theme: 'dark',
            data: []
        }
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published)
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
