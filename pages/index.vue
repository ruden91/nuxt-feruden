<template>
  <div class="feruden-main">
    <section class="feruden-main__front-container">
      <div class="feruden-main__front-article-container">
        <article class="feruden-main__front-article">
          <nuxt-link :to="`/blog/${latestItems[0].slug}`">
            <img :src="latestItems[0].image" :alt="latestItems[0].title">
            <div>
              <h3>{{ latestItems[0].title }}</h3>
              <p>{{ latestItems[0].description }}</p>
            </div>
          </nuxt-link>
        </article>
      </div>
      <div class="feruden-main__front-article-container">
        <article
          class="feruden-main__front-article"
          v-for="item in latestItems.slice(2)"
          :key="item.id"
        >
          <nuxt-link :to="`/blog/${item.slug}`">
            <img :src="item.image" :alt="item.title">
            <div>
              <h3>{{ item.title }}</h3>
            </div>
          </nuxt-link>
        </article>
      </div>
      <div class="feruden-main__front-article-container">
        <article class="feruden-main__front-article">
          <img :src="latestItems[1].image" :alt="latestItems[1].title">
          <div>
            <h3>{{ latestItems[1].title }}</h3>
            <p>{{ latestItems[1].description }}</p>
          </div>
        </article>
      </div>
    </section>
    <div class="feruden-main__category-container">
      <section
        class="feruden-main__category-section"
        v-for="(value, key) in categoryItems"
        :key="key"
      >
        <header>
          <h3>{{ capitalize(key) }}</h3>
        </header>
        <div>
          <article v-for="item in value" :key="item.id">
            <nuxt-link :to="`/blog/${item.slug}`">
              <div>
                <img :src="item.image" :alt="item.title">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </nuxt-link>
          </article>
        </div>
      </section>
      <aside class="feruden-main__aside"></aside>
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";
import { refineContentfulPost } from "~/utils/helpers";
import uniq from "lodash/uniq";
export default {
  async asyncData() {
    try {
      let items = [];
      let categoryItems = {};
      let categories = [];
      const res = await client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
      });

      if (res.items.length > 0) {
        items = res.items.map(item => refineContentfulPost(item));
      }

      // 카테고리 아이템 분류
      categories = uniq(items.map(o => o.categories[0]));

      categories.map(v => {
        categoryItems[v] = items.filter(o => o.categories[0] === v);
      });

      return {
        latestItems: items.slice(0, 5),
        categoryItems,
        categories,
        items
      };
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.feruden-main {
  @include e("front-container") {
    @include clearfix;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1208px;
    margin: 0 auto;
  }
  @include e("category-container") {
    @include clearfix;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1208px;
    margin: 0 auto;
  }
  @include e("front-article-container") {
    &:nth-of-type(1) {
      float: left;
      width: 40%;
      padding-right: 30px;
      article {
        img {
          width: 100%;
          display: block;
          height: 200px;
          object-fit: cover;
        }
        div {
          margin-top: 10px;
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }
    &:nth-of-type(2) {
      float: left;
      width: 35%;
      padding-right: 30px;
      article {
        @include clearfix;
        margin-bottom: 24px;
        img {
          width: 100px;
          height: 100px;
          display: block;
          object-fit: cover;
          float: left;
        }
        div {
          padding-left: 115px;
          h3 {
            font-size: 16px;
          }
        }
      }
    }
    &:nth-of-type(3) {
      float: left;
      width: 25%;
      article {
        img {
          width: 100%;
          display: block;
          height: 200px;
          object-fit: cover;
        }
      }
    }
  }
  @include e("front-article") {
    h3 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
      color: rgba(0, 0, 0, 0.84);
    }

    p {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.54);
    }
    h3,
    p {
      overflow: hidden;
      max-height: 84px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
    }
  }
  @include e("aside") {
    float: left;
    width: calc(100% - 680px);
  }
  @include e("category-section") {
    float: left;
    width: 680px;
    header {
      margin-bottom: 25px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      h3 {
        padding-top: 13px;
        padding-bottom: 13px;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid rgba(0, 0, 0, 0.54);
        transform: translateY(1px);
      }
    }

    article {
      @include clearfix;
      margin-bottom: 35px;
      h3,
      p {
        overflow: hidden;
        max-height: 84px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      a {
        display: block;
        min-height: 152px;
      }
      div {
        h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: rgba(0, 0, 0, 0.84);
        }

        p {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.54);
        }
      }
      img {
        float: right;
        width: 220px;
        height: 152px;
        margin-left: 20px;
        object-fit: cover;
      }
    }
  }
}
</style>