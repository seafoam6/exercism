
const robotNames = [];

export default class Robot {
  constructor(){
    this.rname = this.assignName();
  }

  get name() { return this.rname; }
  set name(newName) { throw new Error(); }

  assignName(){
    let attemptName = this.generateName();
    while (robotNames.includes(attemptName)){
      attemptName = this.generateName();
    }
    this.addRobotName(attemptName);
    return attemptName;
  }
  generateName(){
    return this.randomLetter() + this.randomLetter() + this.randomNumber() + this.randomNumber() + this.randomNumber();
  }
  addRobotName(robot){
    robotNames.push(robot);
  }
  randomLetter(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }
  randomNumber(){
    return Math.floor(Math.random() * 10);
  }
  reset(){
    this.rname = this.assignName();
  }

}