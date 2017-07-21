// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
// re = new RegExp("^6011|64[4-9]|65");
//     if ((cardNumber.match(re) !== null) && ([16,19].indexOf(cardNumber.length) !== -1))
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstOne = cardNumber.slice(0,1);
  var firstTwo = cardNumber.slice(0,2);
  var firstThree = cardNumber.slice(0,3);
  var firstFour = cardNumber.slice(0,4);
  var mastercard = /^([51-55])/g;
  var maestro = /^5018|5020|5038|6304/g;
  var discoverPrefix = ['6011','644','645','646','647','648','649','65'];///^6011|[644-649]|65/g;
  var dinnerClubPrefix = ['38','39'];
  var americanExpress = ['34','37'];
  var chinaUnionPrefix = /^(62212[6-9]|6221[3-9][0-9]|622[2-8][0-9]{2}|6229[01][0-9]|62292[0-5]|^(62[4-6])|^(628[2-8]))/;//^([622126-622925])|^(62[4-6])/g;
  if (typeof cardNumber === 'string') {
    if (cardNumber.length===14&&dinnerClubPrefix.indexOf(firstTwo)!==-1){
              return 'Diner\'s Club';
    }else if (cardNumber.length===15&&americanExpress.indexOf(firstTwo)!==-1){
        return 'American Express';
    }else if([13,16,19].indexOf(cardNumber.length)!==-1&&['4'].indexOf(firstOne)!==-1){
        return 'Visa';
    }else if ([16].indexOf(cardNumber.length)!==-1 && ['51','52','53','54','55'].indexOf(firstTwo)!==-1) {
      return 'MasterCard';
    }else if((discoverPrefix.indexOf(firstTwo)!==-1||discoverPrefix.indexOf(firstThree)!==-1||discoverPrefix.indexOf(firstFour)!==-1)&&[16,19].indexOf(cardNumber.length)!==-1){
      return "Discover";
    }else if([12,13,14,15,16,17,18,19].indexOf(cardNumber.length)!==-1&&maestro.test(cardNumber)){
       return "Maestro";
    }else if ([16,17,18,19].indexOf(cardNumber.length)!==-1&& chinaUnionPrefix.test(cardNumber)) {
       return 'China UnionPay';
    }
 }else{
   return 'not in right format';
 }
};
//6011123456746126545
//5018123454564845
//6284000000000000000
