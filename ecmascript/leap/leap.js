class Year {
  constructor(year){
    this.year = year;
  }

  divisibleby(number){
    return this.year % number === 0;
  }

  isLeap(){
    return this.divisibleby(4) && !this.divisibleby(100) || this.divisibleby(400);
  }

}

export default Year;