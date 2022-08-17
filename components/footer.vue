<template>
<div style="padding-top: 1px">
    <footer class="footer">
      <div class="footer-notes">
        <div class="col" style="float:left;width:60%;">
          <div style="margin-bottom:20px;">GitHub Repository<br/><a href="https://github.com/RoyHudson/Bloodies-Landing-Page" target="_blank">GitHub</a></div>
          <div style="margin-bottom:20px;">Equipo Responsable<br/><a href="" target="_blank">Programacion Grafica Q2 2022</a></div>
          <div style="margin-bottom:20px;">Graphics UI<br/><a href="https://antdv.com/components/overview" target="_blank">Ant Design</a></div>
        </div>
        <div class="col" style="float:left;width:40%;">
          <div style="margin-bottom:20px;">
            <a style="margin-right:20px;" href="https://github.com/cosmicjs" target="_blank">
              <i class="fa fa-github social-icon"></i>
            </a>
            <a href="https://twitter.com/cosmic_js" target="_blank">
              <i class="fa fa-twitter social-icon"></i>
            </a>
          </div>
          <div style="margin-bottom:20px;">&copy; {{ new Date().getFullYear() }} Nuxt JS </div>
          <div style="margin-bottom:20px;">
            <a href="https://uip.edu.pa/" target="_blank">
              <img style="float:left;margin-right:15px;position:relative;" src="../assets/banner_uip.png" width="400" height="100"/>
              <span class="powered-by"></span>
            </a>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  background-color: #333;
  color: #fff;
  font-size: 18px;
  width: 100%;
}
.footer-notes {
  margin: 0 auto;
  max-width: 960px;
  padding: 15px;
  padding-bottom: 60px;
  padding-top: 40px;
}
</style>