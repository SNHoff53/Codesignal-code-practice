function almostIncreasingSequence(sequence) {
    
    // initializing the countDecrease to zero
    // initializing whether the duplicate number, if any, has been removed; setting it to false
   var countDecrease = 0;
   var haveRemoved = false;
   
   // iterating through the number sequence checking to see if the rightNum is less than the focusNum 
   for (var focusNum = 0; focusNum < sequence.length - 1; focusNum++) {
       var rightNum = focusNum + 1;
       if (sequence[focusNum] >= sequence[rightNum]) {
           // if the focusNum of the sequence is the same as the rightNum of the sequence, then remove the rightNum
           if (sequence[focusNum -1] == sequence[rightNum]) {
               sequence.splice(rightNum, 1);
               haveRemoved = true;
           } else {
               if (focusNum == sequence.length - 2) {
                   sequence.pop();
               }
               sequence.splice(focusNum, 1);
               haveRemoved = true;
           }
           break;
       }
   }
};