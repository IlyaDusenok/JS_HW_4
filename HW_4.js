function Cat(name) {
    this.name = name;
    this.foodAmount = 50;
    this.formatFoodAmount = function () {
        return this.dailyNorm() + 'гр.';
    };
    this.feed = function () {
        return 'Насыпаем в миску ' + this.formatFoodAmount() + ' корма';
    }

    this.dailyNorm = function (foodAmount) {
        if (!arguments.length) {
            return this.foodAmount;
        }

        if (foodAmount < 50) {
            throw new Error('Недостаточно корма');
        }

        if (foodAmount > 100) {
            throw new Error('Слишком много корма!');
        }

        this.foodAmount = foodAmount;
    }
}

var barsik = new Cat('barsik');


// console.log(barsik.dailyNorm(55));
// console.log(barsik.dailyNorm(45));
// console.log(barsik.dailyNorm(102));
console.log(barsik.dailyNorm());
console.log(barsik.feed());