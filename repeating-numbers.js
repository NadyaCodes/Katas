// input data: two dimensional array (an array of arrays), where each sub-array has two numeric values. For example:

// eg. [[1, 2], [2, 3]]

// first is the value to repeat, the second is the amount of times to repeat that value.
// each set should be separated by a comma


const repeatNumbers = function(data) {

  let finalString = ''

  for (let arr of data) {
    for (let i = 0; i < arr[1]; i++) {
      finalString += arr[0].toString()
    }
    finalString += ', '
  }

  const answer = finalString.slice(0, -2)

  return answer

}

console.log(repeatNumbers([[1, 10]]));
// 1111111111

console.log(repeatNumbers([[1, 2], [2, 3]]));
// 11, 222

console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// 10101010, 343434343434, 9292