var appRouter = function (app) {
    app.get("/", function (req, res) {

            if(!req.query.cityName){
                return res.send({
                    "status": "error",
                    "message": "missing city Name"
                });
            }
            else if (req.query.cityName.length <= 3)
            {
                return res.send({
                    "status": "error",
                    "message": "not enough informations"
                });
            }
            else{
                content.forEach(element => {
                    if (element.name == req.query.cityName)
                    {
                        if(!bool)
                        {
                            return res.send({
                                element
                            });
                            bool = true;
                        }
                    }
                });
            }
    });

    app.post("/account", function (req, res) {
        if (!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({
                "status": "error",
                "message": "missing a parameter"
            });
        } else {
            return res.send(req.body);
        }
    });
}

var bool = false;

var fs = require("fs");

var content;

fs.readFile("assets\\cities.json", 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    content = JSON.parse(data);
    console.log("finishParsing");
});

module.exports = appRouter;