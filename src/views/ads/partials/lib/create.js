import Ads from "@/api/Ads";


const success = (app, res) => {
    app.$alert({
        title: 'Created Successfully',
        type: 'success'
    });
    console.log(res);
    app.isLoading = false;
    app.cancel();
    app.errors  = {};
}

const failed = (app, res) => {
    app.$alert({
        title: res.message,
        type: 'error'
    });

    if(res.code == 'VALIDATION_ERROR') {
        app.errors  = res.errors;
    }
    
    app.isLoading = false;
}

export const create = (app, items) => {
    console.log(items);
    app.isLoading = true;
    app.errors  = {};
    Ads.create(items)
    .then((res) => success(app, res.data))
    .catch((err) => failed(app, err.response.data))
    .finally(() => app.isLoading = false);
}