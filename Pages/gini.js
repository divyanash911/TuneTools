pic=document.getElementById("spic");

pic.addEventListener("mouseenter",function () {
    pic.style.filter="none"
    pic.style.transform="scale(1.05)"
    pic.style.transition="1s ease"
})
pic.addEventListener("mouseleave",function () {
    pic.style.filter="grayscale(70%)"
    pic.style.transform="scale(0.95)"
    pic.style.transition="1s ease"
})

const stars = document.querySelectorAll('.rating img');
var rating = 0;

stars.forEach((star) => {
  star.addEventListener('click', () => {
    rating = parseInt(star.dataset.value.split('-')[1]); // extract rating number from "my-x" string
    for(let i=1; i<=rating; i++){
        var currstar = document.querySelector('[data-value="my-' + i + '"]');
        if(currstar.src=="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BQ3W2uHaqTe2RgCswx3aJ6CBWhtTOusZDA&usqp=CAU"){
        currstar.src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-star-icon-png-image_3785556.jpg"
        currstar.style.filter="brightness(200%)"}
        else{
            for(let i=1;i<=rating;i++){
            var currstar = document.querySelector('[data-value="my-' + i + '"]');
            currstar.src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-vector-star-icon-png-image_3785556.jpg"
            currstar.style.filter="brightness(200%)"}
            for(let i=rating+1;i<=5;i++){
                var currstar = document.querySelector('[data-value="my-' + i + '"]');
                currstar.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BQ3W2uHaqTe2RgCswx3aJ6CBWhtTOusZDA&usqp=CAU"
            }
        }
    }
    updateRating();
  });
 
});

function updateRating() {
  console.log(`You rated ${rating} stars.`);
  
}

var serial=0;

function show() {
  
  if(serial==0){
    var name = document.getElementById("nameid");
    var rev = document.getElementById("reviewid");
    var tableBody = document.getElementById("tableBody");
    var lastRow = tableBody.rows[tableBody.rows.length - 1];
    var lastSerial = lastRow ? parseInt(lastRow.cells[0].textContent) : 0;
    var row = document.createElement("tr");
    var serialCell = document.createElement("td");
    serialCell.textContent = "Serial No";
    row.appendChild(serialCell);
    var nameCell = document.createElement("td");
    nameCell.textContent = "Name";
    row.appendChild(nameCell);
    var ratecell = document.createElement("td");
    ratecell.textContent = "Rating";
    row.appendChild(ratecell);
    var reviewCell = document.createElement("td");
    reviewCell.textContent = "Comments!";
    row.appendChild(reviewCell);
    
    tableBody.appendChild(row);
    var cHeight = document.getElementById("cid").offsetHeight;
    console.log(cHeight)
    document.getElementById("cid").style.height = cHeight + 1 + "px";
    var inheight = document.getElementById("parent-container").offsetHeight;
    document.getElementById("parent-container").style.height = inheight + 100 + "px";
    var name = document.getElementById("nameid");
    var rev = document.getElementById("reviewid");
    var tableBody = document.getElementById("tableBody");
    var lastRow = tableBody.rows[tableBody.rows.length - 1];
    var lastSerial = lastRow ? parseInt(lastRow.cells[0].textContent) : 0;
    serial++
    var row = document.createElement("tr");
    var serialCell = document.createElement("td");
    serialCell.textContent = serial;
    row.appendChild(serialCell);
    var nameCell = document.createElement("td");
    nameCell.textContent = name.value;
    row.appendChild(nameCell);
    var ratecell = document.createElement("td");
    ratecell.textContent = rating;
    row.appendChild(ratecell);
    var reviewCell = document.createElement("td");
    reviewCell.textContent = rev.value;
    row.appendChild(reviewCell);
    
    tableBody.appendChild(row);
    // var cHeight = document.getElementById("cid").clientHeight;
    // document.getElementById("cid").style.height = cHeight + 1 + "px";
    var inheight = document.getElementById("parent-container").clientHeight;
    document.getElementById("parent-container").style.height = inheight + 100 + "px";
  }
  else{
    var name = document.getElementById("nameid");
    var rev = document.getElementById("reviewid");
    var tableBody = document.getElementById("tableBody");
    var lastRow = tableBody.rows[tableBody.rows.length - 1];
    var lastSerial = lastRow ? parseInt(lastRow.cells[0].textContent) : 0;
    serial=lastSerial+1
    var row = document.createElement("tr");
    var serialCell = document.createElement("td");
    serialCell.textContent = serial;
    row.appendChild(serialCell);
    var nameCell = document.createElement("td");
    nameCell.textContent = name.value;
    row.appendChild(nameCell);
    var ratecell = document.createElement("td");
    ratecell.textContent = rating;
    row.appendChild(ratecell);
    var reviewCell = document.createElement("td");
    reviewCell.textContent = rev.value;
    row.appendChild(reviewCell);
    
    tableBody.appendChild(row);
    // var cHeight = document.getElementById("cid").clientHeight;
    // document.getElementById("cid").style.height = cHeight + 1 + "px";
    var inheight = document.getElementById("parent-container").clientHeight;
    document.getElementById("parent-container").style.height = inheight + 100 + "px";
  }
  
  

}

var countDownDate = new Date("June 30, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "Now Available!";
  }
}, 1000);



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