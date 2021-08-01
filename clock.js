const clock = () => {
  //Definging all div
  const hours = document.getElementById("clock_hours");
  const minutes = document.getElementById("clock_minutes");
  const seconds = document.getElementById("clock_seconds");

  //get times
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
};
setInterval(clock, 1000);
