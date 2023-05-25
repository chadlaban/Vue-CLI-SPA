<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input 
                        type="text"
                        class="form-control"
                        v-model="pageTitle"
                    />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Content
                    </label>
                    <textarea
                        type="text"
                        class="form-control" rows="5"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="linkText"
                    />
                </div>
                <!-- <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="linkUrl"
                    />
                </div> -->
                <div class="row mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="published">
                        <label class="form-check-label" for="gridCheck1">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button
                class="btn btn-primary"
                :disabled="isFormInvalid"
                @click.prevent="submitForm()"
            >Create Page</button>
        </div>
    </form>
</template>

<script setup>
import { inject, ref, computed, watch} from 'vue';
import { useRouter } from 'vue-router';

const bus = inject('$bus');
const pages = inject('$pages');
const router = useRouter();

let pageTitle = ref('');
let content = ref('');
let linkText = ref('');
let linkUrl = ref('');
let published = ref(true);

function submitForm() {
    if (!pageTitle || !content || !linkText) {
        alert('Please fill out form!');
        return;
    }

    let newPage = {
        pageTitle: pageTitle.value,
        content: content.value,
        link: {
            text: linkText,
        },
        published: published.value
    };

    pages.addPage(newPage);

    // customer event = $emit (public property)
    bus.$emit('pageCreated', newPage);

    router.push({path: '/pages'});
}

const isFormInvalid = computed(() => !pageTitle || !content || !linkText);

watch(pageTitle, (newTitle, oldTitle) => {
    if (linkText.value === oldTitle) {
        linkText.value = newTitle;
    }
});
</script>

<!-- // props: ['pageCreated'],
// computed properties returns a value; uses an existing value/current data

// emits acts like a prop for $emit but can be used as a validator/debugger and IS OPTIONAL
// emits: {
//     pageCreated(pageTitle, content, link) {
//         if (!pageTitle) {
//             return false;
//         }

//         if (!content) {
//             return false;
//         }

//         if (!link || !linkText || !linkUrl) {
//             return false;
//         }

//         return true;
//     }
// },

// watcher acts like an event listener (change) then can give us ability to change -->

