<template>
  <div>
    <!-- Header -->
    <v-app-bar
        color="white"
        density="default"
        elevation="0"
        class="tw-border-b-0 !tw-shadow-lg !tw-shadow-gray-400/10 tw-top-0 !tw-fixed tw-overflow-visible"
        :absolute="false"
      >

        <!-- Left Part -->
        <template v-if="false" v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <!-- / Left Part -->

        <!-- App Logo -->
        <v-app-bar-nav-icon variant="text" @click.stop="handleClick()"></v-app-bar-nav-icon>
        <!-- / App Logo -->

        <!-- Right Part -->
        <template v-slot:append>
          <!-- <v-btn :ripple="false" class="mr-2"  icon>
            <v-img width="22" height="22" :src="localUrl + 'assets/img/icons/search.svg'"></v-img>
          </v-btn> -->

          <div class="tw-flex tw-items-center tw-gap-2">
            
            <!-- to be paid -->
            <ToBePaid v-if="$user.role == 'seller'"/>
            <!-- Notifications -->
            <GlobalNotification />
            
            <!-- User Menu -->
            <HeaderMenu />
          </div>

        </template>
        <!-- /Right Part -->

      </v-app-bar>
  </div>
</template>

<script>
import { localUrl } from '@/config/config'
import HeaderMenu from '@/layouts/default/partials/header/HeaderMenu'
import GlobalNotification from '@/layouts/default/partials/header/GlobalNotification'
import ToBePaid from '@/layouts/default/partials/header/ToBePaid'

export default {
    emits: [ 'toggleSidebar' ],
    components: { HeaderMenu, GlobalNotification,ToBePaid },

    data() {
      return {
        localUrl
      }
    },

    computed: {
    },

    methods: {
        handleClick() {
            this.$emit('toggleSidebar');
        }
    }
}
</script>

<style>

</style>