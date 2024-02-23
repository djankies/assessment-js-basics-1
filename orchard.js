///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

// Create an array of the arrays. This will allow us to loop through all the arrays at once.
// loop through the parent array 'acres'.
// loop through each child array (fujiAcres, galaAcres, pinkAcres) within the parent array 'acres'.
// Access the value of the parent array with index [i], then the value of the child array with index [j] and add it to the totalAcres variable.

let acres = [fujiAcres, galaAcres, pinkAcres];
for (let i = 0; i < acres.length; i++) {
    for (let j = 0; j < acres[i].length; j++) {
        totalAcres += acres[i][j];
    }
}

// Alternative solution thats simpler, but dumber and not as fun :(.

// for (let i = 0; i < fujiAcres.length; i++) {
//     totalAcres += fujiAcres[i];
//     totalAcres += galaAcres[i];
//     totalAcres += pinkAcres[i];
// }

console.log("PROBLEM 1: Total Acres = " + totalAcres);
console.log("");

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// Calculate the total number of data points by adding the length of each array together.
let numberOfDataPoints = fujiAcres.length + galaAcres.length + pinkAcres.length;

// Calculate the average number of acres picked per day by dividing the total number of acres by the total number of data points.
let averageDailyAcres = totalAcres / numberOfDataPoints;

console.log("PROBLEM 2: Average Daily Acres = " + averageDailyAcres);
console.log("");

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

while (acresLeft > 0) {
    days++;
    acresLeft -= averageDailyAcres;
}

console.log("PROBLEM 3: Days = " + days);
console.log("");

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// loop through the original arrays and multiply each value by 6.5 to get the tons of apples picked each day.
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5);
}

for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5);
}

for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5);
}

console.log("PROBLEM 4:");
console.log("   Fuji Tons = " + fujiTons);
console.log("   Gala Tons = " + galaTons);
console.log("   Pink Tons = " + pinkTons);
console.log("");

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// create an array of the arrays. This will allow us to loop through all the arrays at once.
// loop through the parent array 'tons'.
// loop through each child array (fujiTons, galaTons, pinkTons) within the parent array 'tons'.
// Access the value of the parent array with index [i], then the value of the child array with index [j] and add it to the variety's total pounds variable.
// multiply the value of the child array by 2000 to convert tons to pounds.

// I realize this is an annoying way to do this, but we're learning loops and arrays so why the **** not.

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

let tons = [fujiTons, galaTons, pinkTons];

for (let i = 0; i < tons.length; i++) {
    for (let j = 0; j < tons[i].length; j++) {
        if (i === 0) {
            fujiPounds += tons[i][j] * 2000;
        } else if (i === 1) {
            galaPounds += tons[i][j] * 2000;
        } else if (i === 2) {
            pinkPounds += tons[i][j] * 2000;
        }
    }
}

console.log("PROBLEM 5:");
console.log("   fujiPounds = " + fujiPounds);
console.log("   galaPounds = " + galaPounds);
console.log("   pinkPounds = " + pinkPounds);
console.log("");

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// multiply the total pounds of each variety by the price of each variety.

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("PROBLEM 6:");
console.log("   fujiProfit = " + fujiProfit);
console.log("   galaProfit = " + galaProfit);
console.log("   pinkProfit = " + pinkProfit);
console.log("");

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// more simple math.

let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log("PROBLEM 7: Total Profit = $" + totalProfit);




// ascii art!

// console.log(
//     `  ______________________________________________________________________`
// );
// console.log(
//     ` |.==============[_C_O_D_I_N_G___R_E_S_E_R_V_E___N_O_T_E_]=============.|`
// );
// console.log(
//     ` ||%&%&%&%_    _        _ _ _   _ _  _ _ _     _       _    _  %&%&%&%&||`
// );
// console.log(
//     ` ||%&.-.&/||_||_ | ||\\||||_| \\ (_ ||\\||_(_  /\\|_ |\\|V||_|)|/ |\\ %&.-.&&||`
// );
// console.log(
//     ` ||&// |\\ || ||_ \\_/| ||||_|_/ ,_)|||||_,_) \\/|  ||| ||_|\\|\\_|| &// |\\%||`
// );
// console.log(
//     ` ||| | | |%               ,-----,-'____'-,-----,               %| | | |||`
// );
// console.log(
//     ` ||| | | |&% """"""""""  [    .-;"\`___ \`";-.    ]             &%| | | |||`
// );
// console.log(
//     ` ||&\\===//                \`).'.' \`_.- \`. '.'.\`(\`  A 76355942 J  \\\\===/&||`
// );
// console.log(
//     ` ||&%'-'%/1                // .' /\`     \\    \\\\                  \\%'-'%||`
// );
// console.log(
//     ` ||%&%&%/ \`   d8888b       // /   \\  _  _;,    \\\\      .-"""-.  1 \`&%&%%||`
// );
// console.log(
//     ` ||&%&%&    8P |) Yb     ;; (     > a  a| \\    ;;    //A\`Y A\\\\    &%&%&||`
// );
// console.log(
//     ` ||&%&%|    8b |) d8     || (    ,\\   \\ |  )   ||    ||.-'-.||    |%&%&||`
// );
// console.log(
//     ` ||%&%&|     Y8888P      ||  '--'/\`  -- /-'    ||    \\\\_/~\\\\_//    |&%&%||`
// );
// console.log(
//     ` ||%&%&|                 ||     |\\'-.__/       ||     '-...-'     |&%&%||`
// );
// console.log(
//     ` ||%%%%|                 ||    /\' |._ .|-.     ||                 |%&%&||`
// );
// console.log(
//     ` ||%&%&|  A 76355942 J  /;\\ _.'   \\  } \\  '-.  /;\\                |%&%&||`
// );
// console.log(
//     ` ||&%.-;               (,  '.      \\  } \`\\   \\'  ,)   ,.,.,.,.,   ;-.%&||`
// );
// console.log(
//     ` ||%( | ) 1  """""""   _( \\  ;...---------.;.; / )_ \`\`\`""""""" 1 ( | )%||`
// );
// console.log(
//     ` ||&%'-'==================\\\`------------------\`/=================='-'%&||`
// );
// console.log(
//     ` ||%&JGS&%&%&%&%&&%&%%&) 547,170  D O L L A R S(%&%&%&&%&%&%%&%&&&%&%%&||`
// );
// console.log(
//     ` '""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""`
// );
