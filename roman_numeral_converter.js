// Roman numerals source: https://www.mathsisfun.com/roman-numerals.html

// Convert to roman function
function convertToRoman(num) {
  // For using in loop
  const romanArray = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ];

  let remainingNum = num;
  let romanStr = '';
  let jumpToNext = false;

  for (let i = 0; i < romanArray.length; i += 1) {
    // If jumpToNext is false, do it
    if (!jumpToNext) {
      const divider = romanArray[i][0];
      const romanSymbol = romanArray[i][1];

      // Floor the division
      const division = Math.floor(remainingNum / divider);

      // If divider is 500, 50 or 5 and division is 1 and first number is 9, do it
      if (i % 2 === 1 && division === 1 && Math.floor(remainingNum / romanArray[i + 1][0]) === 9) {
        remainingNum -= 9 * romanArray[i + 1][0];
        romanStr += romanArray[i + 1][1] + romanArray[i - 1][1];

        // Change jumpToNext to true
        jumpToNext = true;
      }
      // If divider is 500, 50 or 5 and division is 0 and first number is 4, do it
      else if (
        i % 2 === 1 &&
        division === 0 &&
        Math.floor(remainingNum / romanArray[i + 1][0]) === 4
      ) {
        remainingNum -= 4 * romanArray[i + 1][0];
        romanStr += romanArray[i + 1][1] + romanSymbol;

        // Change jumpToNext to true
        jumpToNext = true;
      }
      // Else do it
      else {
        // Remaining number
        remainingNum -= divider * division;

        for (let x = 0; x < division; x += 1) {
          romanStr += romanSymbol;
        }
      }
    }
    // Else change jumpToNext to false
    else {
      jumpToNext = false;
    }
  }

  // Return roman as a string
  return romanStr;
}

// Try it
console.log(convertToRoman(83));
