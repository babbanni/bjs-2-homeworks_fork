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
        if (flag) {
            return
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeout(() => {
            timeoutId = null;
            func(...args);
            flag = true;
        }, delay);
    }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 5000);

function debounceDecorator2(func, delay) {
    let flag = false;
    let count = 0;
    let timeoutId = null;
    return function wrapper(...args) {
        wrapper.count = 0;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!flag) {
            setTimeout(() => {
                func(...args);
                count++;
                wrapper.count = count;
                flag = true;
            }, delay)
        }
        return `Сигналов отправлено всего: ${wrapper.count}`;
    }
}