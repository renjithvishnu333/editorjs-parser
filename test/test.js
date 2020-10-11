const testObject = require("./testData.json");
const edjsParser = require("../build/Parser.node");

const parser = new edjsParser({
    embed: { useProvidedLength: true },
    quote: { applyAlignment: true },
});
const html = parser.parse(testObject);
console.log("HTML:\n" + html);