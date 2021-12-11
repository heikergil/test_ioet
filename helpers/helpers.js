
// compare elements of two arrays
const compareArrays = (arrayA, arrayB) => {
    return arrayA.filter(element => arrayB.includes(element)).length
  };

// define RegExs
const getName = /.+?(?==)/;
const getTimes = '(?<==).+';


// insert data from the txt file into an array of objects
  const returnDataOnArray = (data) => {
    let dataArray = [];
    var array = data.toString().split("\n");
      for(i in array) {
          const name = array[i].match(getName)[0];
          let workedTime = array[i].match(getTimes)[0]
          const arrayTimes = workedTime.split(',')
          dataArray.push({[name] : arrayTimes })
        }

        return dataArray



  }
 

  module.exports = {returnDataOnArray , compareArrays}