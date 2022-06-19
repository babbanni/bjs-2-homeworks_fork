// Задание 1
"use strict";

function getArrayParams(arr) {
    let sum, avg;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // Ваш код
    avg = sum / arr.length;
    return { min: Math.min(...arr), max: Math.max(...arr), avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // Ваш код

    return sum;
}

function makeWork(arrOfArr, func) {
    let max = 0;
    for (let i = 0; i < arrOfArr.length; i++) {
        const funcResult = func(arrOfArr[i]);
        if (funcResult > max) {
            max = funcResult;

        }
    }
    return max
}

// Задание 3
function worker2(arr) {

    return Math.abs(Math.max(...arr) - Math.min(...arr))
}