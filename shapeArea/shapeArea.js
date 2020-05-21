function shapeArea(n) {
    lengthOfPolygon = 2 * n - 1;
    columnSide = lengthOfPolygon;

    while (columnSide > 1) {
        columnSide = columnSide - 2;
        valueOfSingleSide = valueOfSingleSide + columnSide;
    }

    shapeArea = 2 * valueOfSingleSide + lengthOfPolygon;
}
