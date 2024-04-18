// MANUALLY LOADING ELEMENTS FROM AN ARRAY INTO BROWSER

let puppies = [
  //0
  "img/puppy-1.jpg",
  //1
  "img/puppy-2.jpg",
  //2
  "img/puppy-3.jpg",
];

$("div.puppies").append(`<img src=${puppies[0]} />`);
$("div.puppies").append(`<img src=${puppies[1]} />`);
$("div.puppies").append(`<img src=${puppies[2]} />`);



let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg",
  "img/avenger4.jpg",
  "img/avenger5.jpg",
  "img/avenger6.jpg"
];


let avengerNames = [
'IRON MAN',
'CAPTAIN AMERICA',
'THE HULK',
  'BLACK WIDOW',
  'GROOT',
  'GAMORA'
];


function fetchAvengers() {

for(let i=0; i<avengerPics.length; i++) {
  
$("div.avengers").append(`<img src="${avengerPics[i]}" class="img-fluid"/>`);
  $("div.avengers").append(`<h3>${avengerNames[i]}</h3>`);

}
  
};



