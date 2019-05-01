const fs = require("fs");

fs.writeFile("", 'text', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("txt was updated");
  })


module.exports = writeFile;