const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');

//testFeatures are lat/longs for houses to predict
//testLabels are prices for houses to predict
//use training data to predict the test values and then "verify" correct
let { features, labels, testFeatures, testLabels } = loadCSV(
  'kc_house_data.csv',
  {
    shuffle: true,
    splitTest: 10,
    dataColumns: ['lat', 'long'],
    labelColumns: ['price'],
  }
);

console.log(testFeatures);
console.log(testLabels);
