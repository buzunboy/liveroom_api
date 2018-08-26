const cloudDB = require('../cloud_database/cloudDb.js');
const aligners = require('../modules/aligners.js');

class Users {

    static filteredByTodayLogged(completion) {
        new cloudDB().getAllUsers(function(list) {
            var today = new Date().getDate();
            var counter = 0;
            for (var i = 0; i < list.length; i++) {
                let user = list[i];
                let lastLogin = user.lastLogin;
                if (lastLogin) {
                    let date = lastLogin.toDate();
                    let day = date.getDate();
                    if (day == today) {
                        counter++;
                    }
                } 
            }
            completion(counter);
        });
    }
    
    static filteredByLastSeen(completion) {
        new cloudDB().getAllUsers(function(list) {
            var jan = 0;
            var feb = 0;
            var march = 0;
            var apr = 0;
            var may = 0;
            var jun = 0;
            var july = 0;
            var aug = 0;
            var sep = 0;
            var oct = 0;
            var nov = 0;
            var dec = 0;
            for (var i = 0; i < list.length; i++) {
                let user = list[i];
                let lastLogin = user.lastLogin;
                if (lastLogin) {
                    let date = lastLogin.toDate();
                    let day = date.getMonth() + 1;
                    let year = date.getFullYear();
                    let currentYear = new Date().getFullYear();
                    if (year == currentYear || year+1 == currentYear) {
                        switch (day) {
                            case 1:
                            jan++;
                            break;
                            case 2:
                            feb++;
                            break;
                            case 3:
                            march++;
                            break;
                            case 4:
                            apr++;
                            break;
                            case 5:
                            may++;
                            break;
                            case 6:
                            jun++;
                            break;
                            case 7:
                            july++;
                            break;
                            case 8:
                            aug++;
                            break;
                            case 9:
                            sep++;
                            break;
                            case 10:
                            oct++;
                            break;
                            case 11:
                            nov++;
                            break;
                            case 12:
                            dec++;
                            break;
                        }
                    }
                }
            }
            let series = [jan, feb, march, apr, may, jun, july, aug, sep, oct, nov, dec]
            let aligner = new aligners();
            let arrangedUsers = aligner.arrangeMonths(series);
            let months = aligner.getMonthList();
            
            completion(months, arrangedUsers);    
        });
    }
    
}

module.exports = Users;