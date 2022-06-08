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
    let p = percent / 100 / 12;
    let startDate = new Date;
    let months = (date.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += date.getMonth();
    let Payment = body * (p + (p / (((1 + p) ** months) - 1)));
    totalAmount = months * Payment;
    // код для задачи №2 писать здесь
    return totalAmount.toFixed(2);
}