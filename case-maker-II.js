//given an input string to convert.
//convert the console.log examples


const caseMaker = (joiner, firstLetter, afterSpace, input) => {
  
  let finalString = '';

  if (firstLetter === "lower") {
    finalString += input[0].toLowerCase();
  } else if (firstLetter === "upper") {
    finalString += input[0].toUpperCase();
  } else {
    finalString += input[0];
  }
  

  for (let i = 1; i < input.length; i++) {
    let upperLetter = '';
    if (input[i] === ' ') {
      finalString += joiner;
      i++;
      if (afterSpace === "upper") {
        upperLetter = input[i].toUpperCase();
      }
    }
    finalString += upperLetter || input[i];
  }
  return finalString;
};

const vowelChange = (input) => {
  let finalString = '';
  for (let i of input) {
    let upperLetter = '';
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
      upperLetter = i.toUpperCase();
    }
    finalString += upperLetter || i;
  }
  return finalString;
};

const consonantChange = (input) => {
  let finalString = '';
  for (let i of input) {
    let upperLetter = '';
    if (i !== 'a' && i !== 'e' && i !== 'i' && i !== 'o' && i !== 'u') {
      upperLetter = i.toUpperCase();
    }
    finalString += upperLetter || i;
  }
  return finalString;
};

const changeAll = (input, style) => {
  let finalString = '';

  for (let i of input) {
    if (style === 'upper') {
      finalString += i.toUpperCase();
    }
    if (style === 'lower') {
      finalString += i.toLowerCase();
    }
  }

  return finalString;
};


const caseSwitch = (input, style) => {

  switch (style) {
  case "camel":
    return caseMaker('', "lower", "upper", input);
  case "pascal":
    return caseMaker('', "upper", "upper", input);
  case "snake":
    return caseMaker('_', '', '', input);
  case "kebab":
    return caseMaker('-', "lower", "lower", input);
  case "title":
    return caseMaker(' ', "upper", "upper", input);
  case "vowel":
    return vowelChange(input);
  case "consonant":
    return consonantChange(input);
  case "upper":
    return changeAll(input, "upper");
  case "lower":
    return changeAll(input, "lower");
  }
};


const makeCase = function(input, style) {

  let finalString = input;

  if (Array.isArray(style)) {
    for (let s of style) {
      finalString = caseSwitch(finalString, s);
    }
    return finalString;

  }
    
  return finalString = caseSwitch(finalString, style);

  
};

console.log(makeCase("this is a string", "camel"));
//thisIsAString
console.log(makeCase("this is a string", "pascal"));
//ThisIsAString
console.log(makeCase("this is a string", "snake"));
// this_is_a_string
console.log(makeCase("this is a string", "kebab"));
//this-is-a-string
console.log(makeCase("this is a string", "title"));
//This Is A String
console.log(makeCase("this is a string", "vowel"));
//thIs Is A strIng
console.log(makeCase("this is a string", "consonant"));
//THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"]));
//THIS_IS_A_STRING