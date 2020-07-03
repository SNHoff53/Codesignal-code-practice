function almostIncreasingSequence(sequence) {
    // initializing the countDecrease to zero
   var countDecrease = 0;
   for (var focusNum = 1; focusNum < sequence.length - 1; focusNum++) {
       var leftNum = focusNum - 1;
       var rightNum = focusNum + 1;
       console.log("focusNum >= rightNum = " + focusNum >= rightNum)
       if (sequence[focusNum] >= sequence[rightNum]) {
           countDecrease++;
           if (sequence[leftNum] >= sequence[rightNum]) {
               countDecrease++;
           }
       }
       // if (sequence[focusNum] <= sequence[leftNum] && sequence[focusNum] <= sequence[rightNum]){
       //     // focus is bad
       //     countDecrease++;
       // } 
       console.log(countDecrease)
   }
   return countDecrease < 2;
}