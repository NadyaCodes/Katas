//receive a normal string of words separated with spaces. Convert these strings into camel cased strings.

const camelCase = function(input) {
  let finalString = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      i++;
      input[i] = input[i].toUpperCase();
    }
    finalString += input[i];
  }
  
  return finalString;
};

console.log(camelCase("this is a string"));
//thisIsAString

console.log(camelCase("loopy lighthouse"));
//loopyLighthouse

console.log(camelCase("supercalifragalisticexpialidocious"));
//supercalifragalisticexpialidocious