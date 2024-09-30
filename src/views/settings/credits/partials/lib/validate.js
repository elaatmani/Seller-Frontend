export const validate = (app, items) => {   
    if(!items.seller_id) {
        app.errors.seller_id = "Seller is required";
        return false;
    }

    if(!items.amount || parseInt(items.amount) <= 0) {
        app.errors.amount = "Amount is required";
        return false;
    }

    if(!items.credited_at) {
        app.errors.credited_at = "Credited At Date is required";
        return false;
    }

    if(!items.paid_at) {
        app.errors.paid_at = "Paid At Date is required";
        return false;
    }

    return true;
} 