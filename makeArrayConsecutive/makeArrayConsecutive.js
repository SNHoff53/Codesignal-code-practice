function makeArrayConsecutive2(statues) {
    let numberArray = [];
    // Order numbers from smallest to greatest

    var count = 0; 
    var j = i +1;

    for (var i = 0; i < Array.length; i ++) {
        var diffCheck = j - i;
        
        if (diffCheck != 1) {
            count = count + diffCheck - 1; 
        }
    }

    return count;
}