const { parse } = require('url');

module.exports = (req, res) => {
    //const url = parse(req.url, true);
    //const parts = url.pathname.split('/');

    res.setHeader('content-type', 'text/html'); 
    res.end('hello world');
    



};