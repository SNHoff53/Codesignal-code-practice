function almostIncreasingSequence(sequence) {
    
    // initializing the countDecrease to zero
   var countDecrease = 0;
   
   // iterating through the number sequence checking to see if the rightNum is less than the focusNum 
   for (var focusNum = 0; focusNum < sequence.length - 1; focusNum++) {
       var rightNum = focusNum + 1;
       if (sequence[focusNum] >= sequence[rightNum]) {
           sequence.splice(focusNum, 1);
           break;
       }
   }
   
   for (var index = 0; index < sequence.length - 1; index++) {
       var rightNum = index + 1;
       if (sequence[index] >= sequence[rightNum]) {
           console.log('index broke me: ' + index)
           return false;
       }
       console.log('fine')
   }
   console.log(sequence)
   return  true;
}