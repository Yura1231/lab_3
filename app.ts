interface AlarmCImpl {
    ring(): void;
    notify(): void;
}

class SoundAlarm implements AlarmCImpl {
    ring(): void {
        displayMessage("Дзвонить: Пі-пі-пі! Пора вставати!");
    }

    notify(): void {
        displayMessage("Повідомлення: Час прокидатися!");
    }
}

class MelodyAlarm implements AlarmCImpl {
    ring(): void {
        displayMessage("Мелодія: Грає улюблена пісня!");
    }

    notify(): void {
        displayMessage("Повідомлення: Гарного ранку! Настав час!");
    }
}

interface AlarmC {
    start(): void;
    stop(): void;
    toWake(): void;
}

class AlarmClock implements AlarmC {
    protected implementation: AlarmCImpl;

    constructor(implementation: AlarmCImpl) {
        this.implementation = implementation;
    }

    start(): void {
        displayMessage("Будильник запущено.");
    }

    stop(): void {
        displayMessage("Будильник зупинено.");
    }

    toWake(): void {
        this.implementation.ring();
        this.implementation.notify();
    }
}


function displayMessage(message: string) {
    const outputDiv = document.getElementById("output");
    if (outputDiv) {
        outputDiv.innerHTML = message;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let alarm: AlarmC;

    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const wakeBtn = document.getElementById('wakeBtn');
    const alarmType = document.getElementById('alarmType') as HTMLSelectElement;

    
    function updateAlarmType() {
        const selectedType = alarmType.value;

            if (selectedType === "sound") {
                alarm = new AlarmClock(new SoundAlarm());
        } else if (selectedType === "melody") {
            alarm = new AlarmClock(new MelodyAlarm());
        }
    }

    updateAlarmType();  

    alarmType.addEventListener('change', updateAlarmType);

    startBtn?.addEventListener('click', () => alarm.start());
    stopBtn?.addEventListener('click', () => alarm.stop());
    wakeBtn?.addEventListener('click', () => alarm.toWake());
});
