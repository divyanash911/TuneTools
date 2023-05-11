function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
  
    let i = 0;
    let timer = setInterval(function() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        setTimeout(function() {
          typeEffect(element, speed);
        }, 2000); // Wait for 2 seconds before starting again
      }
    }, speed);
  }
  
  let typedText = document.getElementById("typetext");
  typeEffect(typedText, 100);
  

  const nav = document.getElementsByClassName("nav_bar_content");
const navops = document.getElementsByClassName("nav_ops");
const ar = document.getElementsByTagName("a");

Array.from(nav).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.color = "rgba(233, 232, 241, 0.84)";
    
    
  });
  element.addEventListener("mouseout", function () {
    element.style.color = "";
    
    
  });
});

Array.from(navops).forEach(function (element) {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "rgb(96, 95, 95)";
    element.style.transform = "scale(1.15)"
    element.style.transition="0.3s ease"
    
    
  });
  element.addEventListener("mouseout", function () {
    element.style.backgroundColor = "";
    element.style.transform = ""
    element.style.transition=""
  });
});
Array.from(ar).forEach(function (element){
    element.addEventListener("mouseover", function () {
      element.textDecoration="underline"
        
        
      });
      element.addEventListener("mouseout", function () {
        element.textDecoration=""
      });
})