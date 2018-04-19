export class WordProblem{
  constructor(question){
    this.question = question.split(' ');
    this.hasErrors = false;
    const noWhat = this.removeUnnec(this.question);
    let noQ = this.removeQ(noWhat);
    this.areWordsSafe(noQ);
    if (this.hasErrors){
      return;
    }
    while (noQ.length > 1){
      let firstThree = noQ.splice(0,3)
      let result = this.combineThree(firstThree);
      noQ.unshift(result);
    }
    this.ans = noQ[0];
  }

  removeUnnec(arrayToAdjust){
    const unnec = ["What", "is", "by"];
    return arrayToAdjust.filter(item => !unnec.includes(item));
  }

  areWordsSafe(arrayToAdjust){
    const safe = ["plus", "minus", "divided", "multiplied"];
    const unsafe = arrayToAdjust.filter(item => !safe.includes(item));
    const reg = /^-?[0-9]\d*(\.\d+)?$/;
    const nonNumbers = unsafe.filter(item => !reg.test(Number(item)));
    if (nonNumbers.length){
     this.hasErrors = true;
     return false
    }
    return true;
  }

  removeQ(arrayToAdjust){
    return arrayToAdjust.map(item => {
      return item.charAt(item.length - 1) == '?' ? item.substring(0, item.length - 1) : item;
    })
  }

  combineThree(arrayToCombine){
    let [first, operation, second] = arrayToCombine;
    first = Number(first);
    second = Number(second);

    if (operation === "plus"){
      return first + second;
    } else if (operation === "minus"){
      return first - second;
    } else if (operation === "multiplied"){
      return first * second;
    } else if (operation === "divided"){
      return (first / second);
    } else{
      throw Error('This error should not ever be thrown')
    }
  }
  answer(){
    if (this.hasErrors){
      throw new ArgumentError();
    }
    return this.ans;
  }

}

export class ArgumentError{
  constructor(){
    return {
      name: 'argument error',
      message: 'oops',
    }
  }
}
