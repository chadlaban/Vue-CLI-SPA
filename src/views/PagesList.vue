<template>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link
            to="/pages/create"
            class="btn btn-primary btn-sm"
        >New Page</router-link>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(page, index) in $pages.getAllPages()"
                :key="index"
                @click="goToPage(index)"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? 'yes' : 'no' }}</td>
            </tr>
        </tbody>
    </table>
    <!-- <p>{{ counter }}</p> - ref -->
    <!-- <p>{{ data.counter }}</p>  - reactive -->
    <!-- <button @click.prevent="click">click</button> -->
</template>

<script setup>
// Composition API -> organizes code logically
import { ref, reactive, inject} from 'vue'; // 'ref' allows us to create reactive value
import { useRouter } from 'vue-router'

// const counter = ref(0); // {value: 0}
// const data = reactive({ counter: 0 }); // 'reactive' not used for primitive values, only for objects

const $pages = inject('$pages');
const router = useRouter();

function goToPage(index) {
    router.push({ path: `/pages/${index}/edit`});
}

// function click() {
//     // counter.value++; // ref
//     data.counter++; // reactive
// }

// export default {
//     // Options API Start
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
//     // Options API End
// }

</script>

<style scope>
.table.table-hover tr:hover {
    cursor: pointer;
}
</style>