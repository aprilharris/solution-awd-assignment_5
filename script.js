// Challenge 1
let puppies = [
  //0
  "img/puppy-1.jpg",
  //1
  "img/puppy-2.jpg",
  //2
  "img/puppy-3.jpg",
];

$("#puppies").append(`<img src=${puppies[0]} >`);
$("#puppies").append(`<img src=${puppies[1]} >`);
$("#puppies").append(`<img src=${puppies[2]} >`);

// Challenge 2
let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg",
  "img/avenger4.jpg",
  "img/avenger5.jpg",
  "img/avenger6.jpg"
];

let avengerNames = [
  "Iron Man",
  "Captain America",
  "The Incredible Hulk",
  "Black Widow",
  "Groot",
  "Gamora"
];

function fetchAvengers() {
  for(let i=0; i<avengerPics.length; i++) {
    $('#avengers').append(`<img src='${avengerPics[i]}' />`)
    $('#avengers').append(`<h2>${avengerNames[i]}</>`)
  }
   
};

