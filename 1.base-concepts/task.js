"use strict"

function solveEquation(a, b, c) {
    let arr;
    // код для задачи №1 писать здесь
    let x;
    let d = b ** 2 - 4 * a * c;
    if (d < 0) {
        arr = [];
    } else if (d === 0) {
        x = -b / (2 * a);
        arr = [x];
    } else if (d > 0) {
        x = (-b + Math.sqrt(d)) / (2 * a) && (-b - Math.sqrt(d)) / (2 * a);
        arr = [x];
    }

    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let body = amount - contribution;
    let p = percent / 100;
    let Payment = body * (p / 12 + ((p / 12) / (((1 + p / 12) ** date) - 1)));
    totalAmount = date * Payment;
    // код для задачи №2 писать здесь

    return totalAmount.toFixed(2);
}