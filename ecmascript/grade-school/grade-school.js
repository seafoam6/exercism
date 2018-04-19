export default class School {
  constructor() {
    this.db = {};
  }
  roster() {
    return this.clone(this.db);
  }
  add(name, grade) {

    this.prepGrade(grade);
    this.db[grade].push(name);
    this.sortGrade(grade);
  }
  grade(grade) {
    this.prepGrade(grade);
    return this.clone(this.db[grade]);
  }
  sortGrade(grade){
    this.db[grade] = this.db[grade].sort();
  }
  prepGrade(grade){
    if (this.db[grade] == undefined){
      this.db[grade] = [];
    }
  }
  clone(db) {
    const stringified = JSON.stringify(db);
    return JSON.parse(stringified);
  }

}

