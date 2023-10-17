const Alert = {
    install(app) {
        app.config.globalProperties.$user = app.config.globalProperties.$store.getters['user/user']
        app.config.globalProperties.$alert = function(alert) {
            
            this.$store.dispatch('alert/toggleAlert', alert);
        }
    }
}

export default Alert