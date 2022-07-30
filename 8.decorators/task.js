function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            return `Из кэша: ${objectInCache.result}`;
        }

        let result = func(...args);
        cache.push({ hash, result });
        if (cache.length > 5) {
            cache.shift();
        }
        return `Вычисляем: ${result}`;
    }
    return wrapper;
}


function debounceDecoratorNew(func, delay) {
    let flag = false;
    let timeoutId = null;
    return function(...args) {
        if (!flag) {
            func(...args);
            flag = true;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 5000);

function debounceDecorator2(func, delay) {
    let flag = false;
    let timeoutId = null;
    wrapper.count = 0;

    function wrapper(...args) {
        if (!flag) {
            func(...args);
            flag = true;
            wrapper.count++;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
            return console.log("Сигналов отправлено всего: " + wrapper.count);
        }, delay);
    }
    return wrapper;
}