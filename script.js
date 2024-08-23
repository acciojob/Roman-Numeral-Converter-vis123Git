function convertToRoman(num) {
  	const obj = {
      'M' :1000, 
      'D' : 500, 
      'C' : 100, 
      'L' : 50, 
      'X' : 10, 
      'V' : 5, 
      'I' : 1
    };

  for ( i in obj ) {
    while ( num >= obj[i] ) {
      roman += i;
      num -= obj[i];
    }
  }
  return roman;
}

console.log(convertToRoman(36));




module.exports = convertToRoman
