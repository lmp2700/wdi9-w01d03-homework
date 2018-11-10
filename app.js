// for(i = 1; i <= 20; i++) {
//     console.log(i);
// }

// for(let i = 0; i <= 200; i += 2) {
//     console.log(i);
// }



// for(i = 0; i <= 20; i++) {
//   const catPhrase = ["...human...why you taking pictures of me?...", 
//                    "...the catnip made me do it...", "...why does the red dot always get away..."];
//     if(i % 2 === 0) {
//     let randomPhrase = catPhrase[Math.floor(Math.random() * catPhrase.length)];
//     console.log(i + randomPhrase)
// } else {
//       console.log(i + " Love me, pet me! HSSSSSS!")
//   }
// };



// for(let i = 1; i <= 100; i++) {
//         if(i % 3 === 0) {
//             console.log("Fizz");
//         } else if(i % 5 === 0) {
//             console.log("Buzz");
//         } else if(i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizzbuzz");
//         }
//         else {
//           console.log(i)
//         } 
//   }; 


// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// Daniel decides that Shahzad can't be named "Shahzad" anymore. 
// Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
// const shahzad = ["Shahzad", 1000, "Austin"];
// shahzad[0] = 'Gameboy'
// console.log(shahzad);

// Daniel just had his birthday; change Daniel's array to reflect him being a year older. 
// Don't just hard code 187--pretend that you don't know that his age is 186, and write your 
// code to just make him a year older than whatever age he was.
  //  const daniel = ["Daniel", 186, "Dallas"];
  //  console.log(daniel[1] + 1)


// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// const ryan = ["Ryan", 65, "Denver"];
// ryan[2] = 'Gotham City';
// console.log(ryan);


// Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". 
// (Note: remove and then add is different from simply changing the value at that index.)
// const reuben = ["Reuben", 22, "Durham"];
// reuben.pop();
// reuben.push('Chicago');
// console.log(reuben);


// Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 
// cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, 
// but see if you can do it in one line of code
// const jim = ["Jim", 16, "All cities"];
// jim.pop();
// //console.log(jim);
// jim.push('Green Bay', 'Greeley', 'Fort Collins');
// console.log(jim);


// Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 
// 3 cities for Jim is now, remove it from the array using .splice()
// jim.splice(2, 1);
// console.log(jim);


// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for loop to call .toUpperCase() on each of them and print out the result.
// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, 
// make the letters alternate back and forth between uppercase and lowercase.

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let i = 0; i < turtles.length; i++) {
    console.log(turtles[i].toUpperCase());
}


// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// kristynsShoe = kristynsCloset.shift();
// console.log(kristynsCloset);
// console.log(kristynsShoe);

// Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// const thomsCloset = [
//         [
//           // These are Thom's shirts
//           "grey button-up",
//           "dark grey button-up",
//           "light blue button-up",
//           "blue button-up",
//         ],[
//           // These are Thom's pants
//           "grey jeans",
//           "jeans",
//           "PJs"
//         ],[
//           // Thom's accessories
//           "wool mittens",
//           "wool scarf",
//           "raybans"
//         ]
//       ];
// thomsCloset.splice(2[0], [kristynsShoe]);
// console.log(thomsCloset);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output 
// in a sentence to tell us what we'll be wearing. Mix and match!

// kristynsOutfit = 
// thomsOutfit = 

// Dirty Laundry
// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing 
// (item)" for each item in the array.

// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the 
// elements in the arrays) containing all of Thom's shirts, pants, and accessories

// Find the sum of all the multiples of 3 or 5 below 1000.
// let sum = 0;
// for(i = 0; i <= 1000; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//        sum += i; // sum = sum + i 
//     }
//        console.log(sum);
// };
