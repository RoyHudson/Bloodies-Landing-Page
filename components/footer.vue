<template>
  <div class="footer">
      <div class="title">
        Bloodiest {{ new Date().getFullYear()}} - created with
        <a href="https://nuxtjs.org/">Nuxt JS</a>
      </div>
      <div class="social_networks">
        <div class="to_twitter">
          <a href="https://www.google.com/" target="_blank">
            <img :src="require('/assets/fb_logo.png')" alt="Imagen" width="25">
          </a>
        </div>
        <div class="to_instagram">
          <a href="https://www.google.com/" target="_blank">
            <img :src="require('/assets/ig_logo.png')" alt="Imagen" width="25">
          </a>
        </div>
        <div class="to_twitter">
          <a href="https://www.google.com/" target="_blank">
            <img :src="require('/assets/tw_logo.png')" alt="Imagen" width="25">
          </a>
        </div>
        <div class="to_youtube">
          <a href="https://www.google.com/" target="_blank">
            <img :src="require('/assets/yt_logo.png')" alt="Imagen" width="25">
          </a>
        </div>

      </div>
      <div class="tools">
        <div class="github">
          <a href="https://github.com/RoyHudson/Bloodies-Landing-Page" target="_blank">
            Repository <img :src="require('/assets/github_logo.jpg')" height="25px" alt="Github Logo">
          </a>
        </div>
        <div class="ant-design">
          <a href="https://antdv.com/components/overview" target="_blank" >
            UI Library <img :src="require('assets/ant_d_logo.png')" height="25px" alt="Ant Design logo">
          </a>
        </div>
      </div>
    </div>
</template>

<style>
  .footer {
    background-color: #333;
    color: #fff;
    font-size: 18px;
    width: 100%;
  }

  .social_networks{
    display: grid;
    place-content: center;
    grid-template-columns: 35px 35px 35px 35px;
  }

  .title{
    padding: 50px 0 10px;
    display: block;
    text-align: center;
  }

  .tools{
    padding: 50px;
    display: grid;
    place-content: center;
    grid-template-columns: 200px 200px;
  }
</style>
