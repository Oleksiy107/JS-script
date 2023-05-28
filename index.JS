const hour = +prompt("How much hours? ");
const seconds = hour * 3600;
if (isNaN(hour)) {
  alert("Sorry,It's not number");
} else {
  const messenger = `In ${hour} hours = ${seconds} seconds`;
  alert(messenger)
}