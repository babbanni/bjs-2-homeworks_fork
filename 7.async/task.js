class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        }

        if (this.alarmCollection.some(call => call.id === id)) {
            console.error('Звонок уже существует');
            return
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        const arrayLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);

        return arrayLength === this.alarmCollection.length
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime()) {
                    alarm.callback();
                }
            }), 1000);

        }
    }

    stop() {
        if (!!this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach(call => call.id, call.time);
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}