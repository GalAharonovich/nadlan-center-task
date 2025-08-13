<template>
    <div class="main-article">
        <p class="date">{{ date }} | {{ writer }}</p>
        <br>
        <h2 class="title">
            <a href="" class="titleLink">
                {{ title }}
            </a>
        </h2>
        <p class="subtitle">{{ subtitle }}</p>
        <img class="img" v-bind:src="img" alt="">

    </div>

    <div class="mobile-article">
        <img class="img" v-bind:src="img" alt="">
        <h2 class="title">
            <a href="" class="titleLink">
                {{ title }}
            </a>
        </h2>
        <p class="subtitle">{{ subtitle }}</p>
        <br>
        <p class="date">{{ date }} | {{ writer }}</p>
        <br>
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
.main-article {
    display: grid;
    grid-template-areas: "date img img"
        "title img img"
        "subtitle img img";
    padding: 10px;
    padding-right: 0px;
    margin: 10px;
    background-color: white;
    width: 100%;
}

.title {
    grid-area: title;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    direction: rtl;
    padding-right: 10px;

}

.subtitle {
    grid-area: subtitle;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-right: 10px;
    direction: rtl;
    margin: 0px;
}

.img {
    grid-area: img;
    width: 471px;
    height: 285px;
}

.date {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    direction: rtl;
    grid-area: date;
    color: #404040;
    padding-right: 15px;
    margin: 0px;
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
    .main-article {
        display: none;
    }

    .mobile-article {
        display: block;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .smallArticles {
        display: block;
        width: 100%;

    }

    .img{
        width: 100%;
    }
}
</style>