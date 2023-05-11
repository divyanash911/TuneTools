const nav = document.getElementsByClassName("nav_bar_content");
const navops = document.getElementsByClassName("nav_ops");
const ar = document.getElementsByTagName("a");
var submitval=0;

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


const form = document.querySelector("form");
var checkbox = document.getElementById("input-checkbox");
var inputDiv = document.getElementById("input-div");
var clearButton = document.getElementById("clear-button");
var inputField = document.getElementById("input-field");
var checkbox1 = document.getElementById("input-checkbox1");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    inputDiv.style.display = "block";
  } else {
    inputDiv.style.display = "none";
    inputField.value = "";
  }
});

clearButton.addEventListener("click", function () {
  inputField.value = "";
  checkbox.checked = false;
  inputDiv.style.display = "none";
  checkbox1.checked = false;
});
const filterButton = document.getElementById("clear-button1");
var inputValue = "";
var inputValue2 = false;
var isExplicit=false;
filterButton.addEventListener("click", function () {
  const query = document.querySelector("#search-bar").value;
  if(submitval==0||query==''){
    return;
  }
  const inputField = document.getElementById("input-field");
  const inputfield2 = document.getElementById("input-checkbox");
  const explicitCheckbox = document.getElementById("input-checkbox1");

  inputValue = inputField.value;
  isExplicit = explicitCheckbox.checked;
  inputValue2=inputfield2.checked;
  if (inputValue2==true){
    console.log("Input value: ", inputValue);
  }
  else{
    console.log("Duration check box not checked");
  }
  console.log("Is explicit: ", isExplicit);
  // form.submit();
  const query1 = document.querySelector("#search-bar").value;
  console.log(query)
  const searchResults = document.querySelector("#search_result");
  const bodyhead = document.getElementsByClassName("result");
  fetch(`https://itunes.apple.com/search?term=${query1}&media=music&limit=10`)
    .then((response) => response.json())
    .then((data) => {
      searchResults.innerHTML = "";
      if (data.resultCount === 0) {
        const message = document.createElement("p");
        message.textContent = "No results found.";
        searchResults.appendChild(message);
      } 
      else if(inputValue2==true && isExplicit==false){
        inputValue=inputValue*60*1000;
        let count=0;
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          console.log(time);
          if(time<=inputValue){
            count++;
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else if(inputValue2==true && isExplicit==true){
        inputValue=inputValue*60*1000;
        let count=0;
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          const explicit1=result.trackExplicitness;

          if(time<=inputValue && explicit1!="explicit"){
            count++;
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else if(inputValue2==false && isExplicit==true){
        let count=0;
        console.log(11);
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          const explicit1=result.trackExplicitness;
          console.log(explicit1);
          if(explicit1!="explicit"){
            count++;
            console.log(10);
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else {
        const tableHeader = document.createElement("tr");
        const artworkHeader = document.createElement("th");
        const trackNameHeader = document.createElement("th");
        const artistNameHeader = document.createElement("th");
        const audioHeader = document.createElement("th");
        artworkHeader.textContent = "Artwork";
        trackNameHeader.textContent = "Track Name";
        artistNameHeader.textContent = "Artist Name";
        audioHeader.textContent = "Audio Preview";
        tableHeader.appendChild(artworkHeader);
        tableHeader.appendChild(trackNameHeader);
        tableHeader.appendChild(artistNameHeader);
        tableHeader.appendChild(audioHeader);
        searchResults.appendChild(tableHeader);

        data.results.forEach((result) => {
          const trackName = result.trackName;
          const artistName = result.artistName;
          const artworkUrl = result.artworkUrl100;
          const audioSource = result.previewUrl;

          const row = document.createElement("tr");
          const artworkCell = document.createElement("td");
          const trackNameCell = document.createElement("td");
          const artistNameCell = document.createElement("td");
          const audioCell = document.createElement("td");

          const artworkImg = document.createElement("img");
          artworkImg.src = artworkUrl;
          artworkImg.alt = "Album Artwork";
          artworkCell.appendChild(artworkImg);

          trackNameCell.textContent = trackName;
          artistNameCell.textContent = artistName;

          const audio = document.createElement("audio");
          audio.src = audioSource;
          audio.controls = true;
          audioCell.appendChild(audio);
          row.appendChild(artworkCell);
          row.appendChild(trackNameCell);
          row.appendChild(artistNameCell);
          row.appendChild(audioCell);
          searchResults.appendChild(row);
        });
      }
    })
    .catch((error) => console.error(error));
});

form.addEventListener("submit", function (event) {
  submitval=1;
  event.preventDefault();
  const query = document.querySelector("#search-bar").value;
  console.log(query)
  const searchResults = document.querySelector("#search_result");
  const bodyhead = document.getElementsByClassName("result");
  fetch(`https://itunes.apple.com/search?term=${query}&media=music&limit=10`)
    .then((response) => response.json())
    .then((data) => {
      searchResults.innerHTML = "";
      if (data.resultCount === 0) {
        const message = document.createElement("p");
        message.textContent = "No results found.";
        searchResults.appendChild(message);
      } 
      else if(inputValue2==true && isExplicit==false){
        inputValue=inputValue*60*1000;
        let count=0;
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          console.log(time);
          if(time<=inputValue){
            count++;
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else if(inputValue2==true && isExplicit==true){
        inputValue=inputValue*60*1000;
        let count=0;
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          const explicit1=result.trackExplicitness;

          if(time<=inputValue && explicit1!="explicit"){
            count++;
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else if(inputValue2==false && isExplicit==true){
        let count=0;
        console.log(11);
        data.results.forEach((result) => {
          const time = result.trackTimeMillis;
          const explicit1=result.trackExplicitness;
          console.log(explicit1);
          if(explicit1!="explicit"){
            count++;
            console.log(10);
            if(count==1){
              const tableHeader = document.createElement("tr");
              const artworkHeader = document.createElement("th");
              const trackNameHeader = document.createElement("th");
              const artistNameHeader = document.createElement("th");
              const audioHeader = document.createElement("th");
              artworkHeader.textContent = "Artwork";
              trackNameHeader.textContent = "Track Name";
              artistNameHeader.textContent = "Artist Name";
              audioHeader.textContent = "Audio Preview";
              tableHeader.appendChild(artworkHeader);
              tableHeader.appendChild(trackNameHeader);
              tableHeader.appendChild(artistNameHeader);
              tableHeader.appendChild(audioHeader);
              searchResults.appendChild(tableHeader);
              
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
            else{
              const trackName = result.trackName;
              const artistName = result.artistName;
              const artworkUrl = result.artworkUrl100;
              const audioSource = result.previewUrl;

              const row = document.createElement("tr");
              const artworkCell = document.createElement("td");
              const trackNameCell = document.createElement("td");
              const artistNameCell = document.createElement("td");
              const audioCell = document.createElement("td");

              const artworkImg = document.createElement("img");
              artworkImg.src = artworkUrl;
              artworkImg.alt = "Album Artwork";
              artworkCell.appendChild(artworkImg);

              trackNameCell.textContent = trackName;
              artistNameCell.textContent = artistName;

              const audio = document.createElement("audio");
              audio.src = audioSource;
              audio.controls = true;
              audioCell.appendChild(audio);
              row.appendChild(artworkCell);
              row.appendChild(trackNameCell);
              row.appendChild(artistNameCell);
              row.appendChild(audioCell);
              searchResults.appendChild(row);
            }
          }

        });
        if(count==0){
          const message = document.createElement("p");
          message.textContent = "No results found.";
          searchResults.appendChild(message);
        }
      }
      else {
        const tableHeader = document.createElement("tr");
        const artworkHeader = document.createElement("th");
        const trackNameHeader = document.createElement("th");
        const artistNameHeader = document.createElement("th");
        const audioHeader = document.createElement("th");
        artworkHeader.textContent = "Artwork";
        trackNameHeader.textContent = "Track Name";
        artistNameHeader.textContent = "Artist Name";
        audioHeader.textContent = "Audio Preview";
        tableHeader.appendChild(artworkHeader);
        tableHeader.appendChild(trackNameHeader);
        tableHeader.appendChild(artistNameHeader);
        tableHeader.appendChild(audioHeader);
        searchResults.appendChild(tableHeader);

        data.results.forEach((result) => {
          const trackName = result.trackName;
          const artistName = result.artistName;
          const artworkUrl = result.artworkUrl100;
          const audioSource = result.previewUrl;

          const row = document.createElement("tr");
          const artworkCell = document.createElement("td");
          const trackNameCell = document.createElement("td");
          const artistNameCell = document.createElement("td");
          const audioCell = document.createElement("td");

          const artworkImg = document.createElement("img");
          artworkImg.src = artworkUrl;
          artworkImg.alt = "Album Artwork";
          artworkCell.appendChild(artworkImg);

          trackNameCell.textContent = trackName;
          artistNameCell.textContent = artistName;

          const audio = document.createElement("audio");
          audio.src = audioSource;
          audio.controls = true;
          audioCell.appendChild(audio);
          row.appendChild(artworkCell);
          row.appendChild(trackNameCell);
          row.appendChild(artistNameCell);
          row.appendChild(audioCell);
          searchResults.appendChild(row);
        });
      }
    })
    .catch((error) => console.error(error));

  searchResults.addEventListener("mouseover", (event) => {
    const row = event.target.closest("tr");
    if (row) {
      row.classList.add("hover");
    }
  });

  searchResults.addEventListener("mouseout", (event) => {
    const row = event.target.closest("tr");
    if (row) {
      row.classList.remove("hover");
    }
  });
});