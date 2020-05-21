function shapeArea(n) {
    totalLengthAcross = 2 * n - 1;
    halfOfTotalLenght = totalLengthAcross;
    singleSideLength = 0;

    while (halfOfTotalLenght > 1) {
        halfOfTotalLenght = halfOfTotalLenght - 2;
        singleSideLength = singleSideLength + halfOfTotalLenght;
    }

    shapeArea = 2 * singleSideLength + totalLengthAcross;

    return shapeArea;
}