function almostIncreasingSequence(sequence) {
    // initializing the countDecrease to zero
   var countDecrease = 0;
   for (var firstNum = 0; firstNum < sequence.length - 1; firstNum++) {
       var secondNum = firstNum + 1;
       if (sequence[firstNum] >= sequence[secondNum]) {
           countDecrease++;
       }
   }
   return countDecrease < 2;
}