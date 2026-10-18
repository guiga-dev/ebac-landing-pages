const eventTime = new Date('2026-12-05T19:00:00-03:00').getTime();
const fields = ['dias', 'horas', 'minutos', 'segundos'].map(id => document.getElementById(id));
let interval;
function updateCountdown() {
    const seconds = Math.max(0, Math.floor((eventTime - Date.now()) / 1000));
    const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
    fields.forEach((field, index) => { field.textContent = String(values[index]).padStart(2, '0'); });
    if (seconds === 0) {
        document.getElementById('status').textContent = 'A data chegou. É hora de celebrar!';
        if (interval) clearInterval(interval);
    }
}
updateCountdown();
interval = setInterval(updateCountdown, 1000);
