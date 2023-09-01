<template>
  <div v-if="exists">
    <component :is="dashboard"></component>
  </div>
</template>

<script>
import { localUrl } from '@/config/config'
import AdminDashboard from '@/views/dashboard/dashboards/AdminDashboard'
import DeliveryDashboard from './dashboards/DeliveryDashboard.vue'
import AgenteDashboard from './dashboards/AgenteDashboard.vue'
import DefaultDashboard from './dashboards/DefaultDashboard.vue'
import FollowUpDashboard from '@/views/dashboard/dashboards/FollowUpDashboard'
import SellerDashboard from '@/views/dashboard/dashboards/SellerDashboard'

export default {
    components: { 
        admin: AdminDashboard,
        delivery: DeliveryDashboard,
        agente: AgenteDashboard,
        default: DefaultDashboard,
        seller: SellerDashboard,
        'follow-up': FollowUpDashboard
     },

    data() {
        return {
            localUrl,
            exists: false
        }
    },
    computed: {
        user() {
            return this.$store.getters['user/user']
        },
        dashboard() {
            
            return ['admin', 'seller','delivery', 'agente', 'follow-up'].includes(this.user.role) ? this.user.role : 'default'
        },
        
    },
    methods: {
        check() {
            switch (this.user.role) {
            case 'admin':
                this.$router.push({name: 'dashboards/admin'})
            break;
            case 'agente':
                this.$router.push({name: 'dashboards/agent'})
            break;
            case 'seller':
                this.$router.push({name: 'dashboards/seller'})
            break;
            default:
                this.exists = true;
            break;
        }
        }
    },

    created() {
        this.check();
        // this.exists = true
    }

}
</script>

<style>

</style>