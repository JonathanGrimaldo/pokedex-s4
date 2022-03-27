/* Welcome screen */
document.getElementById('name').innerHTML= '¡Bienvenido(a), selecciona Start o busca un pokemon!'

/* Screens */
let preloud = document.getElementById('myscreen_start');
preloud.style.display = 'none';

let byscreen = document.getElementById('good_byescreen');
byscreen.style.display = 'none';

let inptSearch = document.getElementById("mysearching");

/* Enter Key Up */
inptSearch.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});


function search(){
    document.getElementById('name').innerHTML= '';
  let pokemonSearch = document.getElementById('mysearching').value;
  let result = null;
  if(pokemonSearch){
        let preloud = document.getElementById('myscreen_start');
        preloud.style.display = 'none';
    
        let byscreen = document.getElementById('good_byescreen');
        byscreen.style.display = 'none';
    
        let consultScreen = document.getElementById('myscreen');
        consultScreen.style.display ='';
     //console.log(pokemonSearch);
     /* Request */
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonSearch.toLowerCase())
    .then(response => response.json())
    .then(data => (
      /* Inner */
      //console.log(data.stats.length),
      document.getElementById('name').innerHTML= data.name,
      document.getElementById('calis').innerHTML =`<li>Type: <b><span id="type"></span></b></li><li>Moves: <b><span id="count_moves"></span></b></li><hr>
      <li>${data.stats[0].stat.name}: <b><span>${data.stats[0].base_stat}</span></b></li>
       <li>${data.stats[1].stat.name}: <b><span>${data.stats[1].base_stat}</span></b></li>
        <li>${data.stats[2].stat.name}: <b><span>${data.stats[2].base_stat}</span></b></li>
         <li>${data.stats[3].stat.name}: <b><span>${data.stats[3].base_stat}</span></b></li>
          <li>${data.stats[4].stat.name}: <b><span>${data.stats[4].base_stat}</span></b></li>
           <li>${data.stats[5].stat.name}: <b><span>${data.stats[5].base_stat}</span></b></li>`,
      document.getElementById('type').innerHTML= data.types[0].type.name,
        document.getElementById('count_moves').innerHTML= data.moves.length,
      document.getElementById('img_pkm').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+data.id+'.png'
    )).catch(error => document.getElementById('name').innerHTML= 'No encontre tu pokemon :c'); 
    
    document.getElementById('mysearching').value=''; 
  }
}

function init_load(){
    document.getElementById('name').innerHTML= '';
    let consultScreen = document.getElementById('myscreen');
    consultScreen.style.display ='none';
  
    let byscreen = document.getElementById('good_byescreen');
    byscreen.style.display = 'none';
  
    let preloud = document.getElementById('myscreen_start');
    preloud.style.display = '';
}

function off_game(){
    document.getElementById('name').innerHTML= '';
    let preloud = document.getElementById('myscreen_start');
    preloud.style.display = 'none';
  
    let consultScreen = document.getElementById('myscreen');
    consultScreen.style.display ='none';
  
    let byscreen = document.getElementById('good_byescreen');
    byscreen.style.display = '';
}