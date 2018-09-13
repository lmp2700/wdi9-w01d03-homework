// for(i = 1; i <= 20; i++) {
//     console.log(i);
// }

// const num =[];
// for(num = 0; num <= 200; num++) {
//     if(num % 2 === 0);
//     console.log(num);
// }


// For every even number in your loop, log "...human...why you taking pictures of me?...", 
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint: You will need to use Math.random()

const catTalk = ["Love me, pet me! HSSSSSS!"];
const catPhrase = ["...human...why you taking pictures of me?...", 
                   "...the catnip made me do it...", "...why does the red dot always get away..."];
for(i= 0; i < 20; i++) {
    console.log(catTalk);
    // below code is not working, need to research more
} if(i % 2 === 0) {
    console.log(Math.random(catPhrase));
}

