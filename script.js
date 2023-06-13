//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("level");
  let level = 0;

  while (element.parentNode) {
    element = element.parentNode;
    level++;
  }

  alert("The level of the element is: " + level);
});
