// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if (typeof cardNumber === 'string') {
    var firstTwoDigits = cardNumber.slice(0,2);
    var singleDigit = cardNumber.slice(0,1);
    if (cardNumber.length===14&&firstTwoDigits.indexOf('38')!==-1||cardNumber.length===14&&firstTwoDigits.indexOf('39')!==-1){
              return 'Diner\'s Club';
    }else if ((cardNumber.length===15&&firstTwoDigits.indexOf('34')!==-1)||(cardNumber.length===15&&firstTwoDigits.indexOf('37')!==-1)){
        return 'American Express';
    }else if((cardNumber.length>=13&&cardNumber.length<=16||cardNumber.length===19)&&singleDigit.indexOf('4')!==-1){
        return 'Visa';
    }else if (cardNumber.length===16&&/^[51-55]/g.test(cardNumber)) {
      return 'MasterCard';
    }else if((cardNumber.length===16||cardNumber.length===19)&& /^6011|[644-649]|65/g.test(cardNumber)){
      return "Discover";
    }else if(cardNumber.length===12&&/^5018|5020|5038|6304/g.test(cardNumber)){
      return "Maestro";
    }
  }
};
