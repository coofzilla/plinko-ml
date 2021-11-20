const tf = require('@tensorflow/tfjs');

class LinearRegression {
  constructor(features, labels, options) {
    this.features = features;
    this.labels = labels;
    //learningRate is default option
    //if not provide learningRate f/option defaults to Object.Assign obj
    this.options = Object.assign(
      { learningRate: 0.1, iterations: 1000 },
      options
    );
    //initial guesses
    this.m = 0;
    this.b = 0;
  }

  gradientDescent() {

  }

  train() {
    for (let i = 0; i < this.options.iterations; i++) {
      this.gradientDescent();
    }
  }
}

module.exports = LinearRegression;
