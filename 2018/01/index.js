// eslint-disable-next-line no-unused-vars
const { debug } = require("../../lib/utils");

module.exports.part1 = (input) => {
  const result = input
    .split("\n")
    .map((n) => parseInt(n, 10))
    .reduce((total, current) => total + current, 0);
  console.log(result);
  return result;
};

module.exports.part2 = (input) => {
  const result = 0;

  return result;
};

/* var fs = require("fs");
const text = fs.readFileSync("input.txt", "utf8");
const splitLines = (str) => str.split(/\r?\n/);
var changes = splitLines(text);

var resultingFrequency = 0;
var frequencies = {};
var duplicateFrequency = 0;
var duplicate = false;
var sum = 0;
var loop = 0;

while (!duplicate) {
  for (var i = 0; i < changes.length; i++) {
    let number = parseInt(changes[i], 10);

    if (!isNaN(number)) {
      resultingFrequency += number;

      if (!frequencies.hasOwnProperty(resultingFrequency)) {
        frequencies[resultingFrequency] = resultingFrequency;
      } else {
        if (duplicate === false) {
          duplicate = true;
          duplicateFrequency = resultingFrequency;
        }
      }
    }
  }

  if (sum === 0) {
    sum = resultingFrequency;
  }
  loop++;
}

// eslint-disable-next-line no-console
console.log("The resulting frequency after 1 loop is: " + sum);
if (duplicate === true) {
  // eslint-disable-next-line no-console
  console.log(
    "The first frequency was reached twice during the loop " +
      loop +
      " and is: " +
      duplicateFrequency
  );
}
 */