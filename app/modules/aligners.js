class Aligners {

    arrangeMonths(monthSeries) {
        let currentMonth = new Date().getMonth()+1;
        var first = monthSeries.slice(0, currentMonth);
        var sec = monthSeries.slice(currentMonth, 13);
        return sec.concat(first);
    }

    getMonthList() {
        var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let currentMonth = new Date().getMonth()+1;
        var first = monthArray.slice(0, currentMonth);
        var sec = monthArray.slice(currentMonth, 13);
        return sec.concat(first);
    }

}

module.exports = Aligners;