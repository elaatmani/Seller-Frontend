import Credit from "@/api/Credit";


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
    app.isLoading = true;
    app.errors  = {};
    Credit.create(items)
    .then((res) => success(app, res.data))
    .catch((err) => failed(app, err.response.data))
    .finally(() => app.isLoading = false);
}