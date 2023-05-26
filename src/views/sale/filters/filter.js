export default function filteredSales(sales, search, {
    confirmationFilter,
    affectationFilter,
    upsellFilter,
    deliveryFilter,
    agenteFilter,
    dateFilter
}) {

    const startDate = dateFilter[0];
    const endDate = dateFilter[1];
    
    return sales.filter(item => {
        const createdAt = new Date(item.created_at);

        // filter by confirmation
        if (confirmationFilter !== 'all' && item.confirmation !== confirmationFilter) {
            return false;
        }

        // filter by affectation
        if (affectationFilter !== 'all' && item.affectation != affectationFilter) {
            return false;
        }

        // filter by upsell
        if (upsellFilter !== 'all' && item.upsell != upsellFilter) {
            return false;
        }

        // filter by delivery
        if (deliveryFilter !== 'all' && item.delivery != deliveryFilter) {
            return false;
        }

        // filter by agente
        if (agenteFilter !== 'all' && item.agente_id != agenteFilter) {
            return false;
        }

        if (!item.fullname.toLowerCase().includes(search.toLowerCase())) {
            return false;
        }

        // if (!item.city.toLowerCase().includes(search.toLowerCase())) {
        //     return false;
        // }

        /* eslint-disable */
        const createdAtDay = createdAt.getDate();
        const createdAtMonth = createdAt.getMonth();
        const createdAtYear = createdAt.getFullYear();

        if (!!startDate) {
            const startDay = startDate.getDate();
            const startMonth = startDate.getMonth();
            const startYear = startDate.getFullYear();

            if (
                createdAtYear < startYear ||
                (createdAtYear === startYear && createdAtMonth < startMonth) ||
                (createdAtYear === startYear && createdAtMonth === startMonth && createdAtDay < startDay)
            ) {
                return false;
            }
        }


        if (!!endDate) {
            const endDay = endDate.getDate();
            const endMonth = endDate.getMonth();
            const endYear = endDate.getFullYear();

            if (
                createdAtYear > endYear ||
                (createdAtYear === endYear && createdAtMonth > endMonth) ||
                (createdAtYear === endYear && createdAtMonth === endMonth && createdAtDay > endDay)
            ) {
                return false;
            }
        }

        // if item passes all filters, include it in the filtered data
        return true;
    });
}


export function newSales(sales) {
    return {
        id: 1,
        title: "New",
        value: sales.filter(
            (i) => !i.confirmation || i.confirmation == "new"
        ).length,
        // value: 35,
        color: "primary-green",
        icon: "mdi mdi-new-box",
    };
}

export function toProcessSales(sales) {
    return {
        id: 2,
        title: "Process",
        value: sales.filter(
            (i) =>
            !!i.confirmation &&
            !["confirmer", "livre", "expidier"].includes(i.confirmation)
        ).length,
        // value: 231,
        color: "primary-orange",
        icon: "mdi-reload",
    };
}

export function confirmedSales(sales) {
    return {
        id: 3,
        title: "Confirmed",
        value: sales.filter((i) => i.confirmation == "confirmer").length,
        // value: 112,
        color: "deep-purple-accent-2",
        icon: "mdi-phone-check",
    }
}

export function deliveredSales(sales) {
    return {
        id: 4,
        title: "Delivered",
        value: sales.filter((i) => i.delivery == "livrer").length,
        // value: 412,
        color: "primary-blue",
        icon: "mdi-account-check-outline",
    };
}

export function shippedSales(sales) {
    return {
        id: 5,
        title: "Shipped",
        value: sales.filter((i) => i.delivery == "expidier").length,
        // value: 112,
        color: "red",
        icon: "mdi-truck",
    };
}