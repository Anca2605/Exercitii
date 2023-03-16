function squareList(array) {
    return array.filter(x => x > 0 && x % 1 === 0).map(x => x * x)
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
