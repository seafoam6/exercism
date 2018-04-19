export default class LinkedList {
  constructor() {
    this.arr = [];
  }
  push(num) {
    this.arr.push(num);
  }
  pop() {
    return this.arr.pop();
  }
  shift() {
    return this.arr.shift();
  }
  unshift(num) {
    return this.arr.unshift(num);
  }
  count() {
    return this.arr.length;
  }

  delete(number) {
    let indexToDelete;
    this.arr.find((value, index) => {
      if (value === number) {
        indexToDelete = index;
      }
    });
    if (indexToDelete != undefined) {
      this.arr.splice(indexToDelete, 1);
    }
  }
}
