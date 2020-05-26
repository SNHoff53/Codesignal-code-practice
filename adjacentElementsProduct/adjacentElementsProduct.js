function adjacentElementsProduct(inputArray) {
    let largestProduct = Number.MAX_VALUE * -1;

    for (var i = 0; i < inputArray.length - 1; i++) {
        var j = i + 1;
        var product = inputArray[i] * inputArray[j];

        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    
    return largestProduct;
}
