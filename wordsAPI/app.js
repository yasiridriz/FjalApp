var fs = require('fs');
'use strict';

function readLines(input, func) {
    var remaining = '';

    input.on('data', function (data) {
        remaining += data;
        var index = remaining.indexOf('\n');
        var last = 0;
        while (index > -1) {
            var line = remaining.substring(last, index);
            last = index + 1;
            func(line);
            index = remaining.indexOf('\n', last);
        }

        remaining = remaining.substring(last);
    });

    input.on('end', function () {
        if (remaining.length > 0) {
            func(remaining);
        }
    });
}
let list = {
    X: []
}
function func(data) {
    obj = {
        word: data
    }
    list.X.push(obj)
    let jsondata = JSON.stringify(list, null, 2);

    fs.writeFile('formatted.json', jsondata, (err) => {
        if (err) throw err;
        console.log('Line written to file');
    });
};

var input = fs.createReadStream('Test.txt');

readLines(input, func);
