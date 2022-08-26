<template>
  <div>
    <article>
      <div>
        <h2>What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h2>
        <div>
          <a-tag>15/08/2022</a-tag>
          <n-link to="">
            <a-button>Categoria</a-button>
          </n-link>
        </div>
        <div class="article_img">
          <img :src="require('/assets/article_temp.jpg')" width="400" alt="article_image"/>
        </div>
        <div>
          <div class="share_buttons">
            <a-tag color="#55acee">
              <template #icon>
                <twitter-outlined />
              </template>
              <a href="">Twitter</a>
            </a-tag>
            <a-tag color="#cd201f">
              <template #icon>
                <youtube-outlined />
              </template>
              <a href="">YouTube</a>
            </a-tag>
            <a-tag color="#3b5999">
              <template #icon>
                <facebook-outlined />
              </template>
              <a href="">Facebook</a>
            </a-tag>
            <a-tag color="#55acee">
              <template #icon>
                <linkedin-outlined />
              </template>
              <a href="">LinkedIn</a>
            </a-tag>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <a-button type="primary">
              LEER MAS
            </a-button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "articles"
}
</script>

<style scoped>

  article{
    margin: 0;
    border: 0;
    padding-left: 0;
    padding-top: 50px;
  }

  .article_img{
    padding: 10px;
  }

  
  .share_buttons{
    padding: 5px;
  }
</style>
