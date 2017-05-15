function ToIconFilter() {
    return function(sens) {
        switch (sens) {
            case "Credit":
                return "+";
            default:
                return "-";
        }
    };
};
