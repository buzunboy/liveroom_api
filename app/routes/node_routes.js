const users = require('../admin_panel/users.js');

module.exports = function(app, db) {

var getClientIp = function(req) {
    return (req.headers["X-Forwarded-For"] ||
            req.headers["x-forwarded-for"] ||
            '').split(',')[0] ||
           req.client.remoteAddress;
};
    
    // POST REQUESTS
    // Calculates the route and sends the result
    app.post('/v1/calculate', (req, res) => {
        console.log('Post request is received');
    });

    // GET REQUESTS
    // Sends country file with the specified language code
    app.get('/v1/configuration/country/', (req,res) => {
        const languageCode = req.query.languageCode;
        console.log('Get request is received');
        res.send(respond);
    });

    app.get('/admin/v1/users/filter/lastSeen/', (req, res) => {
        console.log('GET admin/v1/users/filter/lastSeen is received');
        users.filteredByLastSeen(function(months, users) {
            let resp = {
                "months": months,
                "users": users
            };
            console.log('Responds is prepared -> ');
            console.log(resp);
            res.send(resp);
        });
    });

    app.get('/admin/v1/users/filter/lastSeen/today', (req, res) => {
        console.log('GET admin/v1/users/filter/lastSeen/today');
        users.filteredByTodayLogged(function(count) {
            let resp = {
                "result": count
            }
            console.log('Respond is prepared -> ');
            console.log(resp);
            res.send(resp);
        });
    });
    
};
