const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    for (let key in getTime) {
      switch (true) {
        case getTime[key] < 10 && getTime[key] > 0:
          getTime[key] = "0" + getTime[key];
          break;
        case getTime[key] <= 0:
          getTime[key] = "00";
          break;
      }
    }

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (getTime.timeRemaining <= 0 && idInterval) {
      clearInterval(idInterval);
    }
  };

  updateClock();
  idInterval = setInterval(updateClock, 1000);
};

export default timer;
