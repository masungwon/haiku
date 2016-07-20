var fs = require('fs');
var cmudictFile = fs.readFileSync('./cmudict.txt');

function createHaiku(structure, syllablesArr) {
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllablesArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

//create Syllables Array
//so each number in the cmudict is a syllable


function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

//turn cmudict into Syllables Array
function formatData(data){
  var lines = data.toString().split("\n"),
      lineSplit,
      syllablesArr = [ [], [], [], [], [], [], [], [] ];
  lines.forEach(function(line) {
    lineSplit = line.split(" ");

  //  console.log("line is " + line); // line is ACHIEVE  AH0 CH IY1 V
  //  console.log("lineSplit is " + lineSplit); // lineSplit is ACHIEVE,,AH0,CH,IY1,V
  //  console.log("lineSplit[0] is " + lineSplit[0]); // lineSplit[0] is ACHIEVE
  //  console.log("lineSplit[1] is " + lineSplit[1]); // lineSplit[1] is
    var numStr = "";
    for (var i = 2; i<lineSplit.length; i++) {
      if (lineSplit[i].match(/\d/) != null) {
        numStr += lineSplit[i].match(/\d/);
      }
    }
    var syl = numStr.length;
    syllablesArr[syl].push(lineSplit[0]);
    console.log("syllablesArr is " + syllablesArr);
    return syllablesArr;
  });
}

formatData(cmudictFile);

module.exports = {
  createHaiku: createHaiku
};
