<template>
    <li>
        <!-- router-link uses 'to' instead of 'href' -->
        <router-link
            :to="`/${index}`"
            class="nav-link"
            active-class="active"
            aria-current="page" 
            :title="`This redirects you to ${page.link.text} page`"
        >{{ page.link.text }}</router-link>
    </li>
</template>

<script>
export default {
    props: ['page', 'index']
}
</script>
