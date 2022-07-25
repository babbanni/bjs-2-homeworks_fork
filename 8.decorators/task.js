function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
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
    let timeoutId = null;
    return function(...args) {
        if (flag) {
            console.log('проигнорировано, флаг поднят');
            return
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => timeoutId = null, 2000);
        func(...args);
        flag = true;
        setTimeout(() => flag = false, delay)
    }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 5000);

function debounceDecorator2(func, delay) {
    let flag = false;
    let count = 0;
    let timeoutId = null;
    return function wrapper(...args) {
        debugger
        wrapper.count = 0;
        if (flag) {
            console.log('проигнорировано, флаг поднят');
            return;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => timeoutId = null, 2000);
        func(...args);
        count++;
        wrapper.count = count;
        flag = true;
        setTimeout(() => flag = false, delay);
        console.log(`Сигналов отправлено всего: ${wrapper.count}`);
    }
}