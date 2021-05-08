function weekday(dienos) {
    if (dienos % 7 === 0) {
        return 7;
}
    return dienos % 7;
}



console.log(weekday(1), '->', 1);
console.log(weekday(5), '->', 5);
console.log(weekday(6), '->', 6);
console.log(weekday(7), '->', 7);

console.log(weekday(8), '->', 1);
console.log(weekday(9), '->', 2);
console.log(weekday(10), '->', 3);
console.log(weekday(11), '->', 4);
console.log(weekday(12), '->', 5);
console.log(weekday(13), '->', 6);
console.log(weekday(14), '->', 7);

console.log(weekday(15), '->', 1);
console.log(weekday(20), '->', 6);
console.log(weekday(28), '->', 7);
