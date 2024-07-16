const csvToJson = require('convert-csv-to-json');
const path = require('path');

const fileInputName = path.join(__dirname, 'nasdaq.csv'); 
const fileOutputName = path.join(__dirname, 'nasdaq.json');

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);

console.log('CSV to JSON conversion completed.');