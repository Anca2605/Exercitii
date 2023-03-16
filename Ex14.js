function alphabeticalOrder(array) {
    return [...array].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))
}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
console.log(letters)