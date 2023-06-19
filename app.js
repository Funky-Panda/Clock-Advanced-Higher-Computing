document.addEventListener("DOMContentLoaded", function () {

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  // const secondHand = document.getElementById("second-hand");

  
  const currentTime = new Date(); 
  const adjustedTime = new Date(currentTime.getTime()); // Add one hour for BST time
  
  const hour = adjustedTime.getHours();
  const minute = adjustedTime.getMinutes();
  
  // Calculate the degrees for minute and hour hands
  const minuteDegrees = minute * 6;
  let hourDegrees = hour * 30 + (minute / 60) * 30;
  
  // Check if the angle is greater than 360 and adjust if necessary
  if (hourDegrees >= 360) {
    hourDegrees -= 360;
  }
  // Apply the angle to the clock
  hourHand.setAttribute("transform", `rotate(${hourDegrees})`);
  minuteHand.setAttribute("transform", `rotate(${minuteDegrees})`);
  // secondHand.setAttribute("transform", `rotate(${secondDegree})`);

  console.log("Current Time: " + adjustedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  console.log("Hour: " + (hourDegrees === 360 ? `0/${hourDegrees}°` : hourDegrees + "°"));
  console.log("Minute: " + (minuteDegrees === 0 ? `0/360°` : minuteDegrees + "°"));
});
