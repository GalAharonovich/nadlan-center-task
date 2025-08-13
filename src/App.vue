<script setup>
import Article from './Article.vue';
</script>

<template>
  <div class="header-mobile">
    <img src="https://i.ibb.co/7dqVb0HJ/Group-238-2.png" alt="" style="width: 127px; padding-right: 15px;">
    <img src="https://i.ibb.co/9H1SPZjV/Group-257.png" alt="" style="width: 22px; height: 15px; padding-top: 20px;">
  </div>
  <div class="big-header">
    <div class="logo">
      <img src="https://i.ibb.co/PsJmYbjC/Group-238-1.png" alt="" class="webLogo">
    </div>
    <div class="header1">
      <div class="header">
        <div class="allTopLinks">
          <a href="" class="topLink">נדל"ן למגורים</a>
          <a href="" class="topLink">התחדשות עירונית</a>
          <a href="" class="topLink">נדל"ן מניב השקעות</a>
          <a href="" class="topLink">דעות וניתוחים</a>
          <a href="" class="topLink">חדשות הענף</a>
          <a href="" class="topLink">עיצוב ואדריכלות</a>
          <a href="" class="topLink">נדל"ן TV</a>
          <a href="" class="topLink">פודקאסטים</a>
        </div>
        <div class="allIcons">
          <img src="https://i.ibb.co/1GWsSLTz/Group-185.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/nqBqdNMv/Group-236.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/3Y5yPsRL/Group-235-1.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/S4pcNHtk/Group-183-1.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/JFvWXZKs/Group-186-1.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/fYZsmHBK/Group-147-1.png" alt="" style="width: 32px; height: 32px;">
          <img src="https://i.ibb.co/SD4pf0zZ/Group-184-1.png" alt="" style="width: 32px; height: 32px;">

        </div>
      </div>
    </div>
    <div class="header2">
      <div class="second-header">
        <div class="allBottomLinks">
          <a href="" class="bottomLink">מדד התחדשות עירונית</a>
          <a href="" class="bottomLink">מחשבונים</a>
          <a href="" class="bottomLink">נדל"ן בראש צעיר</a>
          <a href="" class="bottomLink">מכללת מרכז הנדל"ן</a>
          <a href="" class="bottomLink">צור קשר</a>
        </div>
        <div style="position: relative; padding-top: 10px; width: 20%;">
          <input type="text" style="padding: 10px;" class="search-input" placeholder="חיפוש">
          <svg style="position: absolute;
    left: 15px;
    top: 14px;" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"
            stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>ionicons-v5-f</title>
              <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                style="fill:none;stroke:#f80d0d;stroke-miterlimit:10;stroke-width:32px"></path>
              <line x1="338.29" y1="338.29" x2="448" y2="448"
                style="fill:none;stroke:#f80d0d;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="upperPage">
      <div class="topAdvertise">
        <img src="https://i.ibb.co/vxbpVG7m/fce81dc36dbc484df5f5df58c9264a70e58b8455.png" alt="" style="width: 100%;">
      </div>
      <div class="mainArticle">
        <MainArticle :key="allArticles.id" :title="allArticles[1].title" :subtitle="allArticles[1].subtitle"
          :img="allArticles[1].image" :text="allArticles[1].text" :date="allArticles[1].date"
          :writer="allArticles[1].writer">></MainArticle>
      </div>
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
        <Article :key="allArticles[5].id" :title="allArticles[5].title" :subtitle="allArticles[5].subtitle"
          :img="allArticles[5].image" :text="allArticles[5].text" :date="allArticles[5].date"
          :writer="allArticles[5].writer"></Article>
        <Article :key="allArticles[6].id" :title="allArticles[6].title" :subtitle="allArticles[6].subtitle"
          :img="allArticles[6].image" :text="allArticles[6].text" :date="allArticles[6].date"
          :writer="allArticles[6].writer"></Article>
      </div>
      <div class="bottomAdvertise">
        <img src="https://i.ibb.co/YBKHCtxP/741684c936614ed2685328393d8568ae86566eaa.png" alt="" style="width: 100%;">
      </div>
    </div>
    <div class="mostViewdArticles">
      <p class="tppTitle">הכתבות הנצפות ביותר</p>
      <div class="viewedArticles">
        <ViewedArticle :key="allArticles[7].id" :title="allArticles[7].title" :subtitle="allArticles[7].subtitle"
          :img="allArticles[7].image" :text="allArticles[7].text" :date="allArticles[7].date"
          :writer="allArticles[7].writer"></ViewedArticle>
        <ViewedArticle :key="allArticles[2].id" :title="allArticles[2].title" :subtitle="allArticles[2].subtitle"
          :img="allArticles[2].image" :text="allArticles[2].text" :date="allArticles[2].date"
          :writer="allArticles[2].writer"></ViewedArticle>
        <div style="margin: auto; width: 100%;">
          <img src="https://i.ibb.co/KjZPJyC1/7fbbda8ab09858a766a391c61727e1fb61b62027.png" alt=""
            style="width: 100%; margin: auto; align-self: auto;">
        </div>
        <ViewedArticle :key="allArticles[3].id" :title="allArticles[3].title" :subtitle="allArticles[3].subtitle"
          :img="allArticles[3].image" :text="allArticles[3].text" :date="allArticles[3].date"
          :writer="allArticles[3].writer"></ViewedArticle>
      </div>
    </div>
    <div class="categoryTitle">
      <img src="https://i.ibb.co/7N2TT2hR/Component-18.png" alt=""
        style="width: 47px; height: 48px;     padding-top: 14px;">
      <h2
        style="    margin: 0px;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     padding-top: 28px;"
        class="titleLink">נדל"ן למגורים</h2>
      <img src="https://i.ibb.co/JRdr2psX/Line-2.png" alt="" style="    width: 70%;
    height: 2px;
    padding-top: 60px;">
      <img src="https://i.ibb.co/Z6Svj2f7/Group-239.png" alt="" style="    width: 111px;
    height: 24px;     padding-top: 38px;">

    </div>
    <div class="categoryTitle-mobile">
      <div style="display: flex; width: 50%;">
        <img src="https://i.ibb.co/7N2TT2hR/Component-18.png" alt=""
          style="width: 30px; height: 30px;     padding-top: 30px; padding-left: 10px;">
        <h2
          style="    margin: 0px;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     padding-top: 28px;"
          class="titleLink">נדל"ן למגורים</h2>
      </div>
      <div>
        <img src="https://i.ibb.co/Z6Svj2f7/Group-239.png" alt="" style="    width: 111px;
    height: 24px;     padding-top: 38px;">
      </div>

    </div>
    <div class="category">
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
  </div>
  <div class="nadlanContainer">
    <div class="nadlanTV">
      <div class="categoryTitle">
        <img src="https://i.ibb.co/7N2TT2hR/Component-18.png" alt=""
          style="width: 47px; height: 48px;     padding-top: 14px;">
        <h2
          style="    margin: 0px;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     padding-top: 28px;"
          class="titleLink">נדל"ן TV</h2>
        <img src="https://i.ibb.co/JRdr2psX/Line-2.png" alt="" style="    width: 70%;
    height: 2px;
    padding-top: 60px;">
        <img src="https://i.ibb.co/Z6Svj2f7/Group-239.png" alt="" style="    width: 111px;
    height: 24px;     padding-top: 38px;">
      </div>
    </div>
    <div class="videosContainer">
      <div class="mainVideo">
        <img src="https://i.ibb.co/BH8YrGD9/image.png" alt="" style="width: 100%;">
        <p class="TVdate">18.09.24 | מרכז הנדל"ן</p>
        <p class="TVsubtitle">תושבי בניין רמברנדט 36 בת"א באו להיפרד מהמבנה הישן לטובת בניין חדש, צעיר ונוצץ. שוחחנו עם
          מנכל חברת אלרם בוטיק, שי הראל, ונציגות הדיירים, ושמענו מהם על התחושות ביום ההריסה המורכב.</p>
      </div>
      <div class="smallTVcontainer">
        <div class="videoTVsmall">
          <div>
            <img src="https://i.ibb.co/9mSrNJVv/45759-tumb-750-Xauto-1.png" alt="" style="height: 160px; width: 278px;">
          </div>
          <div style="padding-right: 10px;">
            <p style="font-size: 18px; font-weight: bold;">מי אחראי? עד כמה המדינה והמחוקק צריכים להתערב בעסקאות התחדשות
              עירונית</p>
            <p class="TVdate">18.09.24 | מרכז הנדל"ן</p>
          </div>
        </div>
        <div class="videoTVsmall">
          <div>
            <img src="https://i.ibb.co/9mSrNJVv/45759-tumb-750-Xauto-1.png" alt="" style="height: 160px; width: 278px;">
          </div>
          <div style="padding-right: 10px;">
            <p style="font-size: 18px; font-weight: bold;">מי אחראי? עד כמה המדינה והמחוקק צריכים להתערב בעסקאות התחדשות
              עירונית</p>
            <p class="TVdate">18.09.24 | מרכז הנדל"ן</p>
          </div>
        </div>
        <div class="videoTVsmall">
          <div>
            <img src="https://i.ibb.co/9mSrNJVv/45759-tumb-750-Xauto-1.png" alt="" style="height: 160px; width: 278px;">
          </div>
          <div style="padding-right: 10px;">
            <p style="font-size: 18px; font-weight: bold;">מי אחראי? עד כמה המדינה והמחוקק צריכים להתערב בעסקאות התחדשות
              עירונית</p>
            <p class="TVdate">18.09.24 | מרכז הנדל"ן</p>
          </div>
        </div>
      </div>

    </div>
    <div>
    </div>
  </div>
  <div class="podcastTitle">
    <img src="https://i.ibb.co/7N2TT2hR/Component-18.png" alt=""
      style="width: 47px; height: 48px;     padding-top: 14px;">
    <h2
      style="    margin: 0px;
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;     padding-top: 28px;"
      class="titleLink">פודקאסטים</h2>
    <img src="https://i.ibb.co/JRdr2psX/Line-2.png" alt="" style="    width: 70%;
    height: 2px;
    padding-top: 60px;">
    <img src="https://i.ibb.co/Z6Svj2f7/Group-239.png" alt="" style="    width: 111px;
    height: 24px;     padding-top: 38px;">

  </div>
  <div class="podcast">
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
  <div class="footer">
    <div style="width: 60%; height: 70px; margin: auto; display: flex; justify-content: space-between; direction: rtl; background-color: #FBF8FF; margin-top: 20px;">
<div style="margin: 30px;"><img src="https://i.ibb.co/PsJmYbjC/Group-238-1.png" alt="" width="203px" style="    position: relative;
    bottom: 70px;"></div>
<div style="padding-top: 55px;"><img src="https://i.ibb.co/mrDNBptY/Group-247.png" alt="" width="299px" style="    position: relative;
    bottom: 30px;
    left: 10px;"></div>
    </div>
    <div style="width: 60%; margin: auto; display: flex; justify-content: space-between; color: white; direction: rtl;   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
      <div>
        <p style="font-size: 20px; font-weight: bold;">מרכז הנדל"ן</p>
        <p>אודותת מרכז הנדל"ן</p>
        <p>צור קשר</p>
        <p>תגיות</p>
        <p>מפת אתר</p>
        <p>תנאי שימוש</p>
        <p>מפות הנדל"ן</p>
        <p>RSS</p>
      </div>
      <div>
        <p style="font-size: 20px; font-weight: bold;">מרכז הנדל"ן</p>
        <p>אודותת מרכז הנדל"ן</p>
        <p>צור קשר</p>
        <p>תגיות</p>
        <p>מפת אתר</p>
        <p>תנאי שימוש</p>
        <p>מפות הנדל"ן</p>
        <p>RSS</p>
      </div>
      <div>
        <p style="font-size: 20px; font-weight: bold;">מרכז הנדל"ן</p>
        <p>אודותת מרכז הנדל"ן</p>
        <p>צור קשר</p>
        <p>תגיות</p>
        <p>מפת אתר</p>
        <p>תנאי שימוש</p>
        <p>מפות הנדל"ן</p>
        <p>RSS</p>
      </div>
      <div>
        <p style="font-size: 20px; font-weight: bold;">מרכז הנדל"ן</p>
        <p>אודותת מרכז הנדל"ן</p>
        <p>צור קשר</p>
        <p>תגיות</p>
        <p>מפת אתר</p>
        <p>תנאי שימוש</p>
        <p>מפות הנדל"ן</p>
        <p>RSS</p>
      </div>
    </div>
  </div>
</template>

<script>
import articles from './articles.json'
import Category1 from './Category1.vue';
import MainArticle from './MainArticle.vue';
import ViewedArticle from './ViewedArticle.vue';
export default {
  data() {
    return {
      allArticles: articles.articles
    }
  }
}
</script>

<style>
body {
  background-color: #fbf8ff;
}

.header {
  background-color: #5806C7;
  margin: 4px;
  direction: rtl;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 57px;
}

.second-header {
  background-color: white;
  margin: 4px;
  margin-bottom: 0px;
  margin-right: 0px;
  direction: rtl;
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  height: 57px;
}

.search-input {
  border-radius: 25px;
  width: 82%;
  position: absolute;
  left: 5px;
  border-color: #F15723;
  color: #F15723;

}

.search-input::placeholder {
  color: #F15723;
  padding: 10px;

}

.logo {
  grid-area: logo;
  padding: 23px;
  background-color: white;
}

.big-header {
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-areas:
    "header1 header1 header1 header1 logo"
    "header2 header2 header2 header2 logo";
}

.header1 {
  grid-area: header1;
}

.header2 {
  grid-area: header2;
}

.container {
  width: 60%;
  background-color: #fbf8ff;
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: "mostViewd upperPage upperPage upperPage upperPage"
    "categoryTitle categoryTitle categoryTitle categoryTitle categoryTitle"
    "category category category category category";
  margin: auto;
}

.upperPage {
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-areas:
    "topAd topAd topAd"
    "mainArticle mainArticle mainArticle"
    "smallArticle smallArticle smallArticle"
    "smallArticle smallArticle smallArticle"
    "bottomAd bottomAd bottomAd";
  justify-items: center;
  grid-area: upperPage;
  margin-left: 20px;
}

.mainArticle {
  display: flex;
  justify-content: space-between;
  grid-area: mainArticle;

  width: 100%;
}

.topAdvertise {
  grid-area: topAd;
}

.smallArticles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-area: smallArticle;

}

.bottomAdvertise {
  grid-area: bottomAd;
  height: 195px;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;

}

.tppTitle {
  width: 95%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  direction: rtl;
  padding-right: 15px;
  font-size: 24px;
  font-weight: bold;

}

.mostViewdArticles {
  grid-area: mostViewd;
  width: 100%;
}

.topLink {
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  text-decoration: none;
}

.topLink:hover {
  color: rgb(199, 170, 109);
  text-decoration: underline;
}

.allTopLinks {
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-right: 20px;
  padding-top: 18px;
}

.allIcons {
  display: flex;
  justify-content: space-between;
  width: 18%;
  padding-left: 15px;
  padding-top: 13px;
  padding-bottom: 7px;
}

.allBottomLinks {
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding-right: 20px;
}

.bottomLink {
  color: black;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  text-decoration: none;
  padding-top: 18px;
}

.bottomLink:hover {
  color: rgb(24, 76, 218);
  text-decoration: underline;
}

.category {
  width: 100%;
  grid-area: category;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}

.categoryTitle {
  width: 100%;
  grid-area: categoryTitle;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  direction: rtl;
}

.categoryTitle-mobile {
  display: none;
}

.webLogo {
  height: 68px;
  width: 100%;
}

.header-mobile {
  display: none;
}

.nadlanTV {
  width: 60%;
  margin: auto;
  color: white;
  padding-bottom: 10px;
}

.nadlanContainer {
  direction: rtl;
  background-color: #0B0119;
}

.videosContainer {
  padding: 10px;
  width: 60%;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.mainVideo {
  padding-left: 10px;
  color: white;
  width: 50%;
}

.smallTVcontainer {
  color: white;
  width: 50%;
}

.videoTVsmall {
  color: white;
  display: flex;
  justify-content: space-between;
}

.podcast {
  width: 60%;
  margin: auto;
  display: flex;
}

.podcastTitle {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  direction: rtl;
  margin-bottom: 10px;
}

.footer {
  margin-top: 100px;
  background-color: #5806C7;
}


@media (max-width: 480px) {
  .mostViewdArticles {
    display: none;
  }

  .allIcons {
    display: none;
  }

  .second-header {
    display: none;
  }

  .allTopLinks {
    display: none;
  }

  .header {
    width: 100%;
  }

  .webLogo {
    width: 100%;
  }

  .container {
    display: block;
    width: 100%;
  }

  .mainArticle {
    display: block;
  }

  .smallArticles {
    display: block;
    width: 100%;
  }

  .category {
    display: block;
  }

  .categoryTitle {
    display: none;
  }

  .categoryTitle-mobile {
    display: flex;
    justify-content: space-between;
    direction: rtl;
  }

  .logo {
    display: none;
  }

  .header1 {
    display: none;
  }

  .header-mobile {
    display: flex;
    justify-content: space-between;
    direction: rtl;
    background-color: #5806C7;
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
  }

  .big-header {
    display: none;
  }

  .nadlanContainer {
    display: none;
  }

  .podcast {
display: none;
}

.podcastTitle {
display: none;
}

.footer {
  display: none;
}
}
</style>
