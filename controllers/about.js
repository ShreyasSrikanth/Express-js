const path = require("path");
const routeDir = require('../util/path')

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'contact.html'));
};

exports.postSuccess = (req, res, next) => {
    res.send("<h1>Form successfully Filled</h1>");
}