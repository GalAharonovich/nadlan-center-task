<template>
    <div class="article">
        <a href="">
            <img class="img" v-bind:src="img" alt="">
        </a>
        <p class="title"><a href="" class="titleLink">{{ title }}</a></p>
        <br>
        <p class="date">{{ date }} | {{ writer }}</p>
    </div>

    <div class="mobile-article">
        <div style="width: 65%;">
            <p class="title"><a href="" class="titleLink">{{ title }}</a></p>
            <br>
            <p class="date">{{ date }} | {{ writer }}</p>
        </div>
        <div style="width: 35%;">
            <a href="">
                <img class="img" v-bind:src="img" alt="">
            </a>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    }

})

</script>

<style scoped>
.article {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    background-color: white;
    padding: 4px;
    height: 316px;
    width: 32%;
}

.title {
    grid-area: title;
    width: 90%;
    margin: auto;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    direction: rtl;
    font-weight: bold;
}

.subtitle {
    grid-area: subtitle;
    width: 80%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-right: 15px;
    direction: rtl;
}

.img {
    grid-area: img;
    width: 100%;
    height: 100%;
}

.date {
    font-size: 14px;
    direction: rtl;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 95%;
}

.titleLink {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    direction: rtl;
    font-weight: bold;
    text-decoration: none;
    color: black;
}

.mobile-article {
    display: none;
}

@media (max-width: 480px) {
    .article {
        display: none;
    }

    .mobile-article {
        display: flex;
        padding-bottom: 15px;
    }
}
</style>