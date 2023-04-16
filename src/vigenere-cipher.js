const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(IsDirect = true){
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.IsDirect = IsDirect;
  }

  encrypt(str, key) {
    if(!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let result = "";

    for(let i = 0; i < str.length; i++){
      if(!this.alphabet.includes(str[i])) {result += str[i]; continue;}
      result += this.alphabet[(this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[index++ % key.length])) % this.alphabet.length];
    }
    return this.IsDirect ? result : result.split("").reverse().join("");
  }

  decrypt(str, key) {
    if(!str || !key) throw new Error("Incorrect arguments!");
    str = str.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let result = "";

    for(let i = 0; i < str.length; i++){
      if(!this.alphabet.includes(str[i])) {result += str[i]; continue;}
      let decode = this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[index++ % key.length]) % this.alphabet.length;

      if(decode >= 0) {
        result += this.alphabet[decode];
      } else {
        result += this.alphabet[this.alphabet.length + decode];
      }
    }
    return this.IsDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
