var fs = require('fs');
var cmudictFile = fs.readFileSync('./cmudict.txt');

/*
function createHaiku(structure, syllablesArr) {
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllablesArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}
*/

function createHaiku(structure, syllablesArr) {
  var arrOfWords;
  return structure.map(function(lines){
    console.log("lines is " + lines);
    return lines.map(function(syls){
      console.log("syls is " + syls);
      arrOfWords = syllablesArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

//turn cmudict into Syllables Array
function formatData(data){
  var lines = data.toString().split("\n");
  var lineSplit;
  var syllablesArr = [ [] ];
  lines.forEach(function(line) {
    lineSplit = line.split(" ");
    var numStr = "";
    for (var i = 2; i<lineSplit.length; i++) {
      if (lineSplit[i].match(/\d/) != null) {
        numStr += lineSplit[i].match(/\d/);
      }
    }
    var syl = numStr.length;
    if(syllablesArr[syl] == undefined) {
      syllablesArr[syl] = [];
    }
    syllablesArr[syl].push(lineSplit[0]);
  });
  return syllablesArr;
}

formatData(cmudictFile);

var sylsArr = formatData(cmudictFile);

console.log(createHaiku([[5],[7],[5]], sylsArr));

module.exports = {
  createHaiku: createHaiku
};
