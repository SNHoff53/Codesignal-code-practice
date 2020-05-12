function checkPalindrome(inputString) {
    let checkPalindrome = true;

    for (let i = 0; i <inputString.length; i++) {
        let beginningIndex = i;
        let endingIndex = inputString.length - (i + 1);

        if (inputString[beginningIndex] !== inputString[endingIndex]) {
            checkPalindrome = false;
        }
    }

    return checkPalindrome;
}
