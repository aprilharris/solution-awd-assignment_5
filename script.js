// MANUALLY LOADING ELEMENTS FROM AN ARRAY INTO BROWSER

let puppies = [
  //0
  "img/puppy-1.jpg",
  //1
  "img/puppy-2.jpg",
  //2
  "img/puppy-3.jpg",
];

$("div.puppies").append(`<img src=${puppies[0]} height="100" />`);
$("div.puppies").append(`<img src=${puppies[1]} height="100" />`);
$("div.puppies").append(`<img src=${puppies[2]} height="100" />`);



let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg"
];


let avengerNames = [
'IRON MAN',
'CAPTAIN AMERICA',
'THE HULK'
];


function fetchAvengers() {

for(let i=0; i<avengerPics.length; i++) {
  
$("div.avengers").append(`<img src="${avengerPics[i]}" />`);
  $("div.avengers").append(`<h3>${avengerNames[i]}</h3>`);

}
  
};



