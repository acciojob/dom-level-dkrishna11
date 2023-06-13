document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("level");
  let level = 0;

  let parent = element.parentNode;
  while (parent !== document.body) {
    parent = parent.parentNode;
    level++;
  }

  alert("The level of the element is: " + level);
});