class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer();

    this.daysRef = document.querySelector('span[data-value = "days"]');
    this.hoursRef = document.querySelector('span[data-value = "hours"]');
    this.minsRef = document.querySelector('span[data-value = "mins"]');
    this.secsRef = document.querySelector('span[data-value = "secs"]');
  }
  timer() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.updateClock(deltaTime);
    }, 1000);
  }
  updateClock(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minsRef.textContent = `${mins}`;
    this.secsRef.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 28, 2021'),
});
