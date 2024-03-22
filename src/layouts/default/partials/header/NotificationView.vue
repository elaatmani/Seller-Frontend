<template>
  <div>
    <!-- <AdminNotification v-if="user.role == 'admin'" /> -->
    <GlobalNotification />

    <!-- <UserNotification v-if="['agente', 'delivery'].includes(user.role)" /> -->
  </div>
</template>

<script>
// import AdminNotification from '@/layouts/default/partials/header/AdminNotification'
import GlobalNotification from "@/layouts/default/partials/header/GlobalNotification";

// import UserNotification from '@/layouts/default/partials/header/UserNotification'
export default {
    components: {AdminNotification,GlobalNotification, UserNotification},

    computed: {
        user() {
            return this.$store.getters['user/user']
        }
    }

}
</script>

<style>

</style>