function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash === hash);
        if (!!objectInCache) {
            return `Из кэша: ${objectInCache.result}`;
        }

        let result = func(...args);
        cache.push({ hash: `${hash}`, result: `${result}` });
        if (cache.length > 5) {
            cache.shift();
        }
        return `Вычисляем: ${result}`;
    }
    return wrapper;
}


function debounceDecoratorNew(func, delay) {
    let flag = false;
    return function() {
        if (flag === true) {
            console.log('проигнорировано, флаг поднят');
            return;
        }
        func();
        flag = true;
        setTimeout(() => flag = false, delay)
    }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 5000);

function debounceDecorator2(func, delay) {
    let flag = false;
    let count = 0;
    return function wrapper() {
        if (flag === true) {
            console.log('проигнорировано, флаг поднят');
            return;
        }
        func();
        count += 1;
        wrapper.count = count;
        flag = true;
        setTimeout(() => flag = false, delay);
        console.log(`Сигналов отправлено всего: ${wrapper.count}`);
    }
}