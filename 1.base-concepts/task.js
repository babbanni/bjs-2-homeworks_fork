"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    // код для задачи №1 писать здесь
    let d = b ** 2 - 4 * a * c;
    if (d === 0) {
        arr.push(-b / (2 * a));
    } else if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a))
    }

    return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }
    if (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
    let totalAmount;
    let body = amount - contribution;
    let p = percent / 100 / 12;
    let startDate = new Date();
    let months = (date.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += date.getMonth();
    let payment = body * (p + (p / (((1 + p) ** months) - 1)));
    totalAmount = months * payment;

    // код для задачи №2 писать здесь
    return Number(totalAmount.toFixed(2));
}