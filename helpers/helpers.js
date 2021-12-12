// compare elements of two arrays
const compareArrays = (arrayA, arrayB) => {
  console.log(arrayA.filter(element => arrayB.includes(element)).length)
  return arrayA.filter(element => arrayB.includes(element)).length
};

// define RegExs
const getName = /.+?(?==)/;
const getTimes = '(?<==).+';

// insert data from the txt file into an array of objects
const returnDataOnArray = (data) => {
  let dataArray = [];
  console.log(data)
  let array = data.toString().split("\n");

  for (i in array) {

    const name = array[i].match(getName)[0];

    try {
      
      const workedTime = array[i].match(getTimes)[0]
      const arrayTimes = workedTime.split(',')
      dataArray.push({ [name]: arrayTimes })
    } catch (e) {
      console.error(`${name} has no worked hours`)
        } 
  }
  return dataArray

}

// return the argument the user passed or return file.txt if no argument was found
const fileName = (arg) => {
  if (arg === undefined) {
    return 'file.txt'
  } else {
    return arg
  }

}

module.exports = { returnDataOnArray, compareArrays, fileName }