export default class Matrix {
  constructor(input) {
    this.input = input;
    this.rows = this.createRows();
    this.columns = this.createColumns();
  }

  createRows() {
    return this.input.split('\n').map(row => row.split(' ').map(i => parseInt(i)));
  }
  createColumns() {
    const rowLength = this.rows[0].length;
    const columnLength = this.rows.length;
    const columns = [];
    for (let i = 0; i < rowLength; i++) {
      columns[i] = this.rows.map(rowItem => rowItem[i]);
    }

    return columns;
  }
}
