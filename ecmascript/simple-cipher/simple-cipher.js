
class Cypher {
    constructor(key = "blackholesunwontyoucomeandwashawaytherain"){
        var valid = /^[a-z]+$/.test(key)
        if (!valid) {
            throw new Error('Bad key');
        }
        this.key = key;
        this.alphaKey = this.makeAlpha();
    }

    makeAlpha(){
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let alphaVal = {};
        for (var i = 0; i < alphabet.length ; i++){
            alphaVal[alphabet.charAt(i)] = i;
        }
        return alphaVal;
    }

    stringToArrNum(input){
        let encodedNumbers = [];
        for (var i = 0; i < input.length; i++){
            let tempTextLetter = input[i];
            let tempTextNumber = this.alphaKey[tempTextLetter];
            encodedNumbers.push(tempTextNumber);
        }
        return encodedNumbers;
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    stringFromNumbers(arrayNum){
        return arrayNum.reduce((acc, cur) => {
            return acc += this.getKeyByValue(this.alphaKey, cur)
        },"")
    }

    getInRange(number){
        if (number > 25){
            return number - 26;
        } else if (number < 0){
            return number + 26;
        };
        return number;
    }

    combineNumberArrays(text, keys, callback){
        return text.reduce((acc, cur, index) => {
            return acc.concat(this.getInRange(callback(cur, keys[index])));
        }, [])
    }

    createNumberArrays(text, addOrSubtract){
        const numberInput = this.stringToArrNum(text);
        let numberKey = this.stringToArrNum(this.key);
        let numberArray = [];
        while (numberInput.length > numberKey.length){
            numberKey = numberKey.concat(numberKey);
        }
        numberArray = this.combineNumberArrays(numberInput, numberKey, addOrSubtract);
        return this.stringFromNumbers(numberArray);
    }

    encode(text){
        return this.createNumberArrays(text, this.add);
    }

    decode(text){
        return this.createNumberArrays(text, this.subtract);
    }

    subtract(a, b){
        return a - b;
    }

    add(a, b){
        return a + b;
    }

}

export default Cypher;
