export default class Triangle {
  constructor(depth) {
    this.depth = depth;
    this.rows = [];
    this.makeRows();
    this.fillRows();
    this.lastRow = this.rows[this.rows.length - 1];
  }
  makeRows() {
    for (let i = 0; i < this.depth; i++) {
      this.rows.push([]);
    }
  }
  fillRows() {
    this.rows.forEach((value, rowIndex, array) => {
      const rowNumber = rowIndex + 1;
      for (let innerRowIndex = 0; innerRowIndex < rowNumber; innerRowIndex++) {
        const valToPush = this.getValueToPush(innerRowIndex, rowNumber, array);
        value.push(valToPush);
      }
    });
  }
  getValueToPush(innerRowIndex, rowNumber, array) {
    const previousRow = array[rowNumber - 2];

    if (previousRow == undefined) {
      return 1;
    }
    const previousRowLength = previousRow.length;

    const firstVal =
      innerRowIndex - 1 > -1 && innerRowIndex < previousRowLength
        ? previousRow[innerRowIndex - 1]
        : 0;
    const secondVal =
      innerRowIndex > -1 && innerRowIndex < previousRowLength ? previousRow[innerRowIndex] : 0;

    return firstVal + secondVal > 0 ? firstVal + secondVal : 1;
  }
}
