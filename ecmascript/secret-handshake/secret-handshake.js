export default class SecretHandshake {
  constructor(hex) {
    this.hex = hex;
    this.testHex();
  }

  reverse(set) {
    const prev = [];
    set.map(value => prev.unshift(value));
    return prev;
  }

  testHex() {
    const reg = /[0-9]/;
    if (reg.test(this.hex) == false) {
      throw new Error('Handshake must be a number');
    }
  }

  commands() {
    let secrets = [];
    const numArr = this.hex.toString(2).split('');

    if (numArr[numArr.length - 1] == 1) {
      secrets.push('wink');
    }
    if (numArr[numArr.length - 2] == 1) {
      secrets.push('double blink');
    }
    if (numArr[numArr.length - 3] == 1) {
      secrets.push('close your eyes');
    }
    if (numArr[numArr.length - 4] == 1) {
      secrets.push('jump');
    }
    if (numArr[numArr.length - 5] == 1) {
      secrets = this.reverse(secrets);
    }
    return secrets;
  }
}
