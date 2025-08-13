<script setup>
import { ref } from 'vue'
import Article from './Article.vue';


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

<template>
      <div class="smallArticles">
        <Article :key="allArticles[7].id" :title="allArticles[7].title" :subtitle="allArticles[7].subtitle"
          :img="allArticles[7].image" :text="allArticles[7].text" :date="allArticles[7].date"
          :writer="allArticles[7].writer"></Article>
        <Article :key="allArticles[2].id" :title="allArticles[2].title" :subtitle="allArticles[2].subtitle"
          :img="allArticles[2].image" :text="allArticles[2].text" :date="allArticles[2].date"
          :writer="allArticles[2].writer"></Article>
        <Article :key="allArticles[3].id" :title="allArticles[3].title" :subtitle="allArticles[3].subtitle"
          :img="allArticles[3].image" :text="allArticles[3].text" :date="allArticles[3].date"
          :writer="allArticles[3].writer"></Article>
        <Article :key="allArticles[4].id" :title="allArticles[4].title" :subtitle="allArticles[4].subtitle"
          :img="allArticles[4].image" :text="allArticles[4].text" :date="allArticles[4].date"
          :writer="allArticles[4].writer"></Article>
      </div>
</template>



<style scoped>
.main-article {
    display: grid;
    grid-template-areas: "date img img"
    "title img img"
        "subtitle img img";
    padding: 10px;
    margin: 10px;
    background-color: white;
    width: 100%;
}

.title {
    grid-area: title;
    width: 311px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    direction: rtl;
    padding-right: 15px;

}

.subtitle {
    grid-area: subtitle;
    width: 311px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-right: 15px;
    direction: rtl;
}

.img {
    grid-area: img;
    width: 500px;
    height: 285px;
}

.date {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    direction: rtl;
    grid-area: date;
    color: #404040;
    padding-right: 15px;
}

.titleLink {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    direction: rtl;
    font-weight: bold;
    text-decoration: none;
    color: black;
}
</style>