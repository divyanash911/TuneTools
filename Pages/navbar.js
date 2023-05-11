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
let artist_name = "";
let album_name="";
function setArtist() {
  const album = document.getElementsByTagName("title")[0].textContent;
  console.log(album);
  album_name=album;
  const album_names = ["1989", "Folklore", "Evermore", "Reputation", "Red(Taylor's Version)"];
  const coldplay=["A Head Full of Dreams","Ghost Stories","Music Of The Spheres","Parachutes","X&Y"];
  const weeknd=["AfterHours","My Dear Melancholy","Beauty Behind The Madness","Starboy","Kiss Land"];
  const one_d=["Four","Made in the A.M.","Midnight Memories","Take Me Home","Up All Night"];
  const imagine=["Evolve","Night Visions","Origins","Mercury Act-1","Smoke + Mirrors"];
  const ed=["Divide","=","Multiply","+","-"];
  if (album_names.includes(album)) {
    artist_name = "Taylor Swift";
  }
  else if(coldplay.includes(album)){
    artist_name="Cold Play";
  }
  else if(weeknd.includes(album)){
    artist_name="The Weeknd";
  }
  else if(one_d.includes(album)){
    artist_name="One Direction";
  }
  else if(imagine.includes(album)){
    artist_name="Imagine Dragons";
  }
  else if(ed.includes(album)){
    artist_name="Ed Sheeran";
  }

}



const buttons = document.querySelectorAll('.save-button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      setArtist();
      const row = event.target.closest('tr');
      const data = {
        song_name: row.cells[1].textContent,
        duration: row.cells[2].textContent,
        artist: artist_name,
        album: album_name
      };
      
        fetch('http://localhost:8000/endpoint', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          if(data.status=='error'){
            alert('Given song is already in playlist');
          }
          else{
            alert("Song added");
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
      });
    });