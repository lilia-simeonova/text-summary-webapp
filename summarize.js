var summarize = require('text-summary');


module.exports = {
  action: function (req, res) {
    
    var text = req.body['text'];
    console.log(text);
    
    var numberSentences;
    if(text['count'] >= 0) {
      numberSentences = text['count'];
    } else {
      numberSentences = 3;
    }
    var question = text['sentence'];
    var summary;
    var text = text['text'];
    console.log(question);
    if(question) {
      summary = summarize.summaryWithQuestion(question, text, numberSentences); 
    } else {
      summary = summarize.summary(text, numberSentences);
      console.log(summary);
    }
    console.log('---------------------------------------');
    console.log("the summary is:", summary);
    var result = {"result": summary};
    res.send(result);
  }
}