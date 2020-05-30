function makeArrayConsecutive2(statues) {
    // sorting numbers in array from smallest to largest
    statues = statues.sort((a, b) => a - b);
    console.log(statues);

    // initializing the count to zero
    var count = 0;

    for (var firstValue = 0; firstValue < statues.length - 1; firstValue ++) {
       // checking each index against its neighbor while iterating through the array
        var secondValue = firstValue + 1;
        
        // comparing the values of indexes in an array
        var diffCheck = statues[secondValue] - statues[firstValue];
        console.log(diffCheck);
        
        if (diffCheck != 1) {
            var count = count + diffCheck - 1; 
        }
    }

    return count;
}