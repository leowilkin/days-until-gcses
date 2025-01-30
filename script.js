const countdownDate = new Date("May 12, 2025 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;

    document.getElementById("days").querySelector(".top").textContent = days;
    document.getElementById("days").querySelector(".bottom").textContent = days;
    document.getElementById("hours").querySelector(".top").textContent = hours;
    document.getElementById("hours").querySelector(".bottom").textContent = hours;
    document.getElementById("minutes").querySelector(".top").textContent = minutes;
    document.getElementById("minutes").querySelector(".bottom").textContent = minutes;
    document.getElementById("seconds").querySelector(".top").textContent = seconds;
    document.getElementById("seconds").querySelector(".bottom").textContent = seconds;
    document.getElementById("milliseconds").querySelector(".top").textContent = milliseconds;
    document.getElementById("milliseconds").querySelector(".bottom").textContent = milliseconds;

    requestAnimationFrame(updateCountdown);
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}

document.getElementById("toggle-mode").addEventListener("click", toggleMode);

updateCountdown();
