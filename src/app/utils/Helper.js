export const Helper = {
    'currencyFormate': (currency) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(currency);
    },
    'bgColor': (text) => {
        switch (text) {
            case "open":
                return "#A7D995";
            case "process":
                return "#EDC982";
            default:
                return "#F08F8F";
        }
    }
};