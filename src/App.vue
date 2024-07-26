<template>
  <v-app class="my-application">
    <AppProvider :i18n="locales">
      <router-view />
    </AppProvider>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { version } from '@/config/config.js';
import locales from '@ownego/polaris-vue/dist/locales/en.json';

export default {
  name: 'App',

  data: () => ({
    theme: 'light',
    version: version,
    locales
  }),

  methods: {
    ...mapActions('user', ['setIsLoggedIn', 'setPermissions']),

    checkVersion() {
      const v = localStorage.getItem('app_version');

      if (v != this.version) {
        localStorage.setItem('app_version', this.version);
        location.reload(true);
      }
    }
  },

  mounted() {
    this.checkVersion();

    // reset the navbar styles styles of polaris for shopify datefilter 
    document.documentElement.style.setProperty('--p-color-scrollbar-thumb-bg-hover', 'none')
    document.documentElement.style.scrollbarColor = 'auto'
    document.documentElement.style.scrollbarWidth = 'auto'


  },
}
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

@font-face {
  font-family: "Nunito";
  src: url("@/assets/font/Nunito-VariableFont_wght.ttf");
  font-weight: 100 1000;
}

$font-family: 'Nunito', "Segoe UI", "Roboto", sans-serif;
$body-font-family: 'Nunito';
$title-font: 'Nunito';

#application {

  .headline,
  .title,
  [class*='display-'],
  [class*='text-'] {
    font-family: $font-family, sans-serif !important;
  }

  font-family: $font-family,
  sans-serif !important;
}

.my-application * {
  font-family: $font-family, sans-serif !important;
}
</style>

<style>
.dp__action_select {
  background: #f97316 !important;
  padding: 10px 5px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dp__action_cancel {
  padding: 10px 5px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>