const fs = require("fs");
const path = require("path");

function createCups() {
  const result = [];

  fs.readFile("db.json", function (err, data) {
    var json = JSON.parse(data);
    result = json;
  });

  return result;
}

function main() {
  const data = {
    cups: createCups(),
  };

  fs.writeFileSync(path.resolve(__dirname, "db.json"), JSON.stringify(data, null, 4));
}

main();
