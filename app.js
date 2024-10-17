"use strict";
class SoundAlarm {
    ring() {
        displayMessage("Дзвонить: Пі-пі-пі! Пора вставати!");
    }
    notify() {
        displayMessage("Повідомлення: Час прокидатися!");
    }
}
class MelodyAlarm {
    ring() {
        displayMessage("Мелодія: Грає улюблена пісня!");
    }
    notify() {
        displayMessage("Повідомлення: Гарного ранку! Настав час!");
    }
}
class AlarmClock {
    constructor(implementation) {
        this.implementation = implementation;
    }
    start() {
        displayMessage("Будильник запущено.");
    }
    stop() {
        displayMessage("Будильник зупинено.");
    }
    toWake() {
        this.implementation.ring();
        this.implementation.notify();
    }
}
// Функція для виведення повідомлень в інтерфейсі
function displayMessage(message) {
    const outputDiv = document.getElementById("output");
    if (outputDiv) {
        outputDiv.innerHTML = message;
    }
}
// Логіка підключення до HTML інтерфейсу
document.addEventListener('DOMContentLoaded', () => {
    let alarm;
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const wakeBtn = document.getElementById('wakeBtn');
    const alarmType = document.getElementById('alarmType');
    // Обробка зміни типу будильника
    function updateAlarmType() {
        const selectedType = alarmType.value;
        if (selectedType === "sound") {
            alarm = new AlarmClock(new SoundAlarm());
        }
        else if (selectedType === "melody") {
            alarm = new AlarmClock(new MelodyAlarm());
        }
    }
    updateAlarmType(); // Встановлення початкового будильника
    alarmType.addEventListener('change', updateAlarmType);
    startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => alarm.start());
    stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.addEventListener('click', () => alarm.stop());
    wakeBtn === null || wakeBtn === void 0 ? void 0 : wakeBtn.addEventListener('click', () => alarm.toWake());
});
