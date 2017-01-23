var summarize = require('text-summary');


module.exports = {
  action: function (req, res) {
    
    var text = req.body['text'];
    console.log(text);
    var numberSentences = 5;
    var summary = summarize.summary(text, numberSentences);
    console.log('---------------------------------------');
    console.log("the summary is:", summary);
    var result = {"result": summary};
    res.send(result);
    // new User({ name: person.name, age: person.age, email: person.email })
    //   .save(function (err) {
    //     if (err) {
    //       res.status(504);
    //       res.end(err);
    //     } else {
    //       console.log('user saved');
    //       res.end();
    //     }
    //   });
  }
}