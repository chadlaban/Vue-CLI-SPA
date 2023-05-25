import { createRouter, createWebHashHistory } from 'vue-router';
import PageContent from './views/PageContent.vue';
import CreatedPage from './views/CreatedPage.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';
import PageEdit from './views/PageEdit.vue'

// : == param

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:index?', component: PageContent },
        // { path: '/:index?', component: PageContent, props: true },
        // add 'props' if you will use familiar way of doing watcher
        { 
            path: '/pages', 
            component: Pages,
            children: [
                { path: '', component: PagesList },
                { path: 'create', component: CreatedPage },
                { path: ':index/edit', component: PageEdit, props: true }
            ] 
        }, // nested routes
        
        
    ]
});

export default router;