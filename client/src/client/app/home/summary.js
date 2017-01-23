var summarize = require('text-summary');
var fs = require('fs');

var text = fs.readFileSync('umbrella.txt', 'utf8').toString();

var result = summarize.summaryWithQuestion("What is umbrella",text,3);

console.log(result);