// The fs.unlink() method deletes the specified file
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
