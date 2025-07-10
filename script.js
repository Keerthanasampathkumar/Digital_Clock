const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleFormat");

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  const hourDisplay = String(hours).padStart(2, "0");
  clock.innerText = `${hourDisplay}:${minutes}:${seconds} ${ampm}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.innerText = now.toLocaleDateString(undefined, options);

  // Animate colon every second (blink effect)
  clock.style.opacity = clock.style.opacity === "0.5" ? "1" : "0.5";
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
  updateClock();
});

setInterval(updateClock, 1000);
updateClock(); // initial call
