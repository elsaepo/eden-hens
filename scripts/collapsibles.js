let coll = document.getElementsByClassName("q-button");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = document.getElementsByClassName("invis")[i];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.overflow = "hidden";

    } else {
      content.style.maxHeight = content.scrollHeight + 50 + "px ";
      content.style.overflow = "visible";
    }
  });
}
