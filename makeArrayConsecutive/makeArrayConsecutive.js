function makeArrayConsecutive2(statues) {
    let numberArray = [];
    numberArray = numberArray.sort();

    var count = 0;
    var j = i + 1;

    for (var i = 0; i < numberArray.length; i ++) {
        var diffCheck = j - i - 1;
        
        if (diffCheck != 1) {
            count = count + diffCheck - 1; 
        }
    }

    return count;
}