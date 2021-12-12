const helpers = require('./helpers/helpers')

const compareArrays = helpers.compareArrays;
const returnDataOnArray = helpers.returnDataOnArray;
const fileName = helpers.fileName;


const data = [
    'MO10:00-12:00','TU10:00-12:00','TH01:00-03:00','SA14:00-18:00','SU20:00-21:00'
] 

const data2 = [
    'MO10:00-12:00','TH12:00-14:00','SU20:00-21:00','SU20:00-21:00'
]

const data3 = [
    'MO10:00-12:00','TH12:00-14:00','SU20:00-21:00'
]

const data4 = [
    'MO09:00-11:00','TU12:00-14:00','SA08:00-10:00'
]


test('compareArrays should return 2', () => {
    expect(compareArrays(data, data2)).toBe(2);
  });

  test('compareArrays should return 4', () => {
    expect(compareArrays(data2, data3)).toBe(4);
  });

  test('fileName() should return "file.txt"', () => {
    expect(fileName()).toBe('file.txt');
  });

  test('fileName(file2.txt) should return file2.txt', () => {
    expect(fileName('file2.txt')).toBe('file2.txt');
  });

