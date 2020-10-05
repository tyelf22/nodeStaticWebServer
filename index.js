let static = require('node-static');

let port = process.env.PORT || 8000

let file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {

        file.serve(request, response);
    }).resume();
}).listen(port, () => {
    console.log(`Server started on port ${port}`)
});