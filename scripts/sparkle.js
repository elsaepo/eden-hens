/* linking CSS */
let documentHead = document.getElementsByTagName("head")[0];
let cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
cssLink.href = "css/sparkle.css";
documentHead.appendChild(cssLink);

window.onload = function() {

const sparkleBox = document.getElementById("sparkle-box");
console.log(sparkleBox);

/* each loop creates a new sparkle with
random location, size, duration */
for (let i = 0; i < 150; i++) {
  let spark = document.createElement('img');
  spark.src = "scripts/sparkle-gold.png";
  spark.className = "sparkle-image";
  spark.style.top = Math.random()*100 + '%';
  spark.style.left = Math.random()*100 + '%';
  let sparkSize = (Math.random()*50 + 5) + "px";
  spark.style.width = sparkSize;
  spark.style.height = sparkSize;
  spark.style["animation-duration"] = (Math.random()*6 + 8) + "s";
  spark.style.animationDelay = i/5 +'s';
  sparkleBox.appendChild(spark);
};
}
