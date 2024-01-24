import { localUrl, serverUrl } from "@/config/config"

export default {
    install(app) {
        app.config.globalProperties.$frontend = url => localUrl + url;
        app.config.globalProperties.$backend = url => serverUrl + url;
    }
}
