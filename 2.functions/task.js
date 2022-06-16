// Задание 1
"use strict";

function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
        if (arr[i] > max) {
            max === arr[i];
        } else if (arr[i] < min) {
            min === arr[i];
        }
    }
    // Ваш код

    return { min: min, max: max, avg: Number(avg.toFixed(2)) };
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
        func(arrOfArr[i])
        if (func(arrOfArr[i]) > max) {
            max = func(arrOfArr[i]);

        }
    }
    return max
}

// Задание 3
function worker2(arr) {
    let sum = 0;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = max - min;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) {
            max === sum;
        } else if (sum < max) {
            min === sum;
        }
    }
    return Math.abs(result)
}