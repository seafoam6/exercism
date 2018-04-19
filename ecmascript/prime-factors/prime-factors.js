export default class PrimeFactors {
  constructor() {
    this.factoredOut = [];
    this.tempRemaining = 0;
  }

  for(remaining) {
    let attempt = 2;
    this.factoredOut = [];

    while (remaining != 1) {
      while (remaining % attempt === 0) {
        this.factoredOut.push(attempt);
        remaining /= attempt;
      }
      attempt++;
    }

    return this.factoredOut;
  }
}
