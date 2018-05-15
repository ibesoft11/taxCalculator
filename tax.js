/*Tax Calculator
Author : Ibe Ogele
For : NodeJS_Class
*/
function getTaxAmount(amount, taxPercentage) {
    if (typeof(amount)=="number" && typeof(taxPercentage)=="number"){
         var taxPercent = taxPercentage/100; //get tax percentage
         var amountToPay = amount * taxPercent; //calculate amount to pay
         var taxAmount = amountToPay * 100; //convert tax amount from Naira to Kobo
         console.log([taxAmount + " kobo"]); // print output
    } else {
        console.log("Values must be in mumeric form");
    }

}
//test run our function
getTaxAmount(21500,20);
getTaxAmount("none",23);