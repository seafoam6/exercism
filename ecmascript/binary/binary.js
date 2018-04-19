export default class Binary{
  constructor(input){
    this.input = input;
  }

  toDecimal(){
    let split = this.splitInput();
    split = this.reverse(split);

    for (var x = 0; x < split.length; x++){
      if (!this.isNumber(split[x])){
        return 0;
      }
    }
    return split.map((value, index) => this.powerUpDigit(value, index))
      .reduce((prev, curr) => prev + Number(curr), 0)
  }

  splitInput(){
    return this.input.toString().split('');
  }

  powerUpDigit(digit, power){
    return digit*Math.pow(2,power)
  }

  reverse(set){
    let prev = [];
    set.map((value) => prev.unshift(value));
    return prev;
  }

  isNumber(val){
    var reg = /[0-1]/;
    return reg.test(val);
  }
}