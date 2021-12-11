const fs = require('fs')
const path = require('path')
const helpers = require('./helpers/helpers')


const compareArrays = helpers.compareArrays;
const returnDataOnArray = helpers.returnDataOnArray;

// return the argument the user passed or return file.txt if no argument was found
const fileName = (arg) => {
  if (arg === undefined) {
    return 'file.txt'
    } else {
    return arg
  }

}

try {

  // read file
  const data = fs.readFileSync(path.resolve(__dirname, fileName(process.argv[2])), 'utf8');
    // insert data into an array of objects
    const dataArray = returnDataOnArray(data)


        // loop through each object
      for (let i = 0; i < dataArray.length -1; i++) {

         const workerName = Object.keys(dataArray[i])[0]
         const workedHours = dataArray[i][workerName]


         // loop through remaining objects
          for (let j = i + 1; j <= dataArray.length -1; j++) {        
        
            const nextObj = dataArray[j]
            const nextWorkerName = Object.keys(nextObj)[0]
            const nextWorkerHours = nextObj[nextWorkerName]

              if (compareArrays(workedHours, nextWorkerHours) > 0)
              console.log(workerName + '-' + nextWorkerName + ' ' + compareArrays(workedHours, nextWorkerHours))
              }
        }

} catch (err) {
  // detect no file errors
  if (err.code === 'ENOENT') {
  console.log('File not found');
} else {
  // throw every other error
  throw err;
}

}




