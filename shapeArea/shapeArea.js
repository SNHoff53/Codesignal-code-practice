function shapeArea(n) {
    totalLengthOfPolygon = 2 * n - 1;
    columnSide = totalLengthOfPolygon;
    singleSideLength = 0;

    while (columnSide > 1) {
        columnSide = columnSide - 2;
        singleSideLength = singleSideLength + columnSide;
    }

    shapeArea = 2 * singleSideLength + totalLengthOfPolygon;

    return shapeArea;
}
