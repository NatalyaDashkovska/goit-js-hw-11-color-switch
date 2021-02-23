const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const startBtnRef = document.querySelector(`[data-action="start"]`);
const stopBtnRef = document.querySelector(`[data-action="stop"]`);
const body = document.querySelector(`body`);

const changeColour = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const bcgColour = colors[randomIntegerFromInterval(0, 5)];
      body.style.backgroundColor = bcgColour;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

startBtnRef.addEventListener(`click`, changeColour.start.bind(changeColour));
stopBtnRef.addEventListener(`click`, changeColour.stop.bind(changeColour));
