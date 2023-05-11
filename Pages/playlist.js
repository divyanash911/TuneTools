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






fetch('http://localhost:8000/api')
  .then(response => response.json())
  .then(data => {
    const parent=document.getElementsByClassName("main")[0]
    const table = document.getElementsByClassName("table")[0];
    console.log(data.length)
    height=150*(data.length)
    parent.style.height=`${height}px`
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      const row = document.createElement("tr");
      const name = document.createElement("td");
      const artist = document.createElement("td");
      const duration = document.createElement("td");
      const remove = document.createElement("td");
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('bt');
      removeBtn.id = data[i]['id'];
      remove.appendChild(removeBtn);
      name.textContent = data[i]['id'];
      artist.textContent = data[i]['artist'];
      duration.textContent = data[i]['duration'];
      row.appendChild(name);
      row.appendChild(artist);
      row.appendChild(duration);
      row.appendChild(remove);
      table.appendChild(row);
      console.log(data[i]['id']);
     

      removeBtn.addEventListener('click', (event) => {
        
        const rowIndex = event.target.parentElement.parentElement.rowIndex;
        console.log(1);
        table.deleteRow(rowIndex);
        for (let j = rowIndex; j < table.rows.length; j++) {
          table.rows[j].rowIndex = j;
        }

        dict=data[i]

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data[i])
          };

        fetch('http://localhost:8000/api/delete',options)
            .then(response => response.json())
            .then(data => {
                
                console.log("done");
         });


      });
    }
  })
  .catch(error => {
    console.error(error);
  });
