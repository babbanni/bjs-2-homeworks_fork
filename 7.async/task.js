class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        let currentDate = Date.now();
        let timeDate = time.getTime;
        let timeMsDate = timeDate - currentDate;

        setTimeout(() => callback, timeMsDate);

        if (!id) {
            throw new Error('error text');
        }

        if (this.alarmCollection.some(call => call.id === id)) {
            console.error();
            return
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        if (this.alarmCollection.filter(call => call.id === id)) {
            this.alarmCollection.splice(this.alarmCollection.filter(call => call.id === id), 1);
            return true
        }

        return false
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
        stop()
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}