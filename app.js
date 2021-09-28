/*information about challenge
Steven is still building hes tip calculator, using the same rules as before: tip 15% of the bill if the value is between 50 and 300, and if the values is different 20%.

1 Write a function 'calcTip' that takes any bill values as an input and returns the corresponding tip, calculated based on the rules above. Use the function type you like the most.

2 And now let´s use arrays! so create an array "bills" containing the test data below,

3 Create an array 'bills' containing the tip value for each bill , calculated from the function you created before.

4 BONUS: create an array 'totals' containing the total values, so the bills + tips

TEST DATA: 125 , 555 and 44

*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals)