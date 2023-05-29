const hour = +prompt("How much hours? ");
if (Number.isNaN(hour)) {
  alert("Sorry,it's not number");
} else {
  const seconds = hour * 3600;
  const messenger = `In ${hour} hours = ${seconds} seconds`;
  alert(messenger);
}
