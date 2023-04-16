const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(typeof str !== "string"){str = String(str)};

  if(!options.repeatTimes){
    options.repeatTimes = 1;
  }

  if(!options.separator){
    options.separator = "+"
  } else {
    options.separator = String(options.separator);
  }

  if(options.addition === undefined){
    options.addition = "";
  } else {
    options.addition = String(options.addition);
  }

  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1;
  }

  if(!options.additionSeparator){
    options.additionSeparator = "|";
  } else {
    options.additionSeparator = String(options.additionSeparator);
  }

  let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
      add = add.slice(0, add.length - options.additionSeparator.length);

  let result = (str + add + options.separator).repeat(options.repeatTimes);
      result = result.slice(0, result.length - options.separator.length);

  return result;

}

module.exports = {
  repeater
};
