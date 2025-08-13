import { createApp } from 'vue'
import App from './App.vue'
import Article from './Article.vue'

createApp(App).mount('#app')

    var app = new Vue({
      el: '#app',
      data: {
        message: 'this is test'
      }
    }
    )
