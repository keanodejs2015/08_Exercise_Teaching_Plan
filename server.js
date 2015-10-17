var express = require('express');
var app = express();
var http = require("http");

app.get('/', function(req, res) {
    var url = 'http://nodejs.clbo.dk/wp-json/posts?filter[posts_per_page]=0&filter[cat]=2';

    download(url, function(data) {

        var jsonData = JSON.parse(data);
        var titles = '<table><tr><td>Title</td><td>Time:</td></tr>';

        jsonData.forEach(function(element, index, array) {

            var content = jsonData[index].content;
            // time extract
            var timeIndex = content.indexOf("</p>");
            var time = content.slice(26, timeIndex);

            titles += '<tr><td><a href="' + jsonData[index].link + '">' +
                jsonData[index].title + '</a></td>' +
                '<td>' + time + '</td></tr>';
        });
        titles += '</table>';
        res.send(titles);
    });
});

app.listen(3000);

function download(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}
