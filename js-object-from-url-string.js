const urlDecode = function(text) {
  const finalObject = {};

  for (let i = 0; i < text.length; i++) {
    let key = '';
    let value = '';

    while (text[i] !== "=") {
      key += text[i];
      i++;
    }

    i++;

    while (text[i] !== "&" && i < text.length) {
      if (text[i] === "%") {
        value += " ";
        i += 3;
      }
      value += text[i];
      i++;
    }
    finalObject[key] = value;
  }
  return finalObject;
};

console.log(urlDecode("duck=rubber"));
// {duck: "rubber"}

console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// {bootcamp: "Lighthouse Labs"}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// {city: "Vancouver", weather: "lots of rain"}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
// "lots of rain"