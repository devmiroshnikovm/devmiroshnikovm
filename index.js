const { Console } = require("console");
const fs = require("fs");
const path = require("path");

let arrSemanticDivd = ["<p", "<h1", "<h2", "<h3", "<h4", "<span", "<ul", "<ol"];
const allFileContents = fs.readFileSync("./index.html", "utf-8");
let count = 0;

function parse(_expression) {
  let regex = /class="(.*?)"/;
  let arr = [];
  let uniqueArr = [];

  allFileContents.split(/\r?\n/).forEach((line) => {
    if (line.includes(_expression)) {
      let match = line.match(regex);
      arr.push(match[1]);
    }
  });
  uniqueArr = [...new Set(arr)];
  count = count + uniqueArr.length;
  //console.log(_expression, " ", uniqueArr);
  return uniqueArr;
}

console.log(arrSemanticDivd);

let arr = [];

arrSemanticDivd.forEach((element) => {
  let el = parse(element);
  arr.push(el);
  console.log(element, el);
});
console.log("блоков обновить ", count);

let str = arr.flat(Infinity).join().replace(/,/g, " ");
let newArr = [...new Set(str.split(" "))]; // удалить дубликаты
//console.log(newArr, "unique blocks need to change: ", newArr.length);
