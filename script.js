
function loadPuppies(){
  let puppyArray = [
"img/p1.jpg",
"img/p2.jpg",
"img/p3.jpg"
  ];
	

// let imgs = puppyArray.map(function(URL) {
puppyArray.map(function(URL) {
	let img = new Image();
	img.src = URL;
	$('div').append(img);
	return img;
});

};

// Challenge 1
// ### Challenge 1:
// Notice the provided jQuery code on line 9 in your script.js file that appends one image from the array photos. 
// Using that as an example, write a jQuery line of code for each of the remaining images in the array photos.

//create an array of puppies
let puppies = [
  "img/p1.jpg",
  "img/p2.jpg",
  "img/p3.jpg"
];


  /* use append() method to load each puppy into div.puppySection*/
$("div#puppySection").append(`<img src=${puppies[0]} width="300 class="p-3" >`);
$("div#puppySection").append(`<img src=${puppies[1]} width="300" class="p-3">`);
$("div#puppySection").append(`<img src=${puppies[2]} width="300" class="p-3">`);

  // Challenge 2
// The future of tech is in danger! You must use a **for of loop** to assemble the Avengers and save America On Tech and its students!
// Use your knowledge of for loops to summon the galaxy's mightiest heroes to fight off the villainous Thanos and his quest to conquer your future!

// **Step 1:** 
// Inside the provided click handler, write a for of loop that will iterate over the avengerPics array and display each image. You will need to find the images to include in the array.
function avengersAssemble() {


  
let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg",
];

let avengerNames = [
  //00
  "Iron Man",
  //01
  "Captain America",
  //02
  "The Incredible Hulk",
];
  

$('div.avengers').append(`<div class="col"><img src=  ${avengerPics[0]} width="300">` + `<h2>${avengerNames[0]}</h2></div>` );
$('div.avengers').append(`<div class="col"><img src=  ${avengerPics[1]} width="300">` + `<h2>${avengerNames[1]}</h2></div>` );
$('div.avengers').append(`<div class="col"><img src=  ${avengerPics[2]} width="300">` + `<h2>${avengerNames[2]}</h2></div>` );
  
};
  
//   for (let [i] of avengerPics) {
//     $("div.avengers").append(`<img src=  ${avengerPics} >`);
//   }

//   for (let avengerName of avengerNames) {
//     $("body").append(`<p>${avengerName}</p>`);
//   }

//   for (let i = 0; i < avengerPics.length; i++) {
//     //WHAT GOES HERE????? - HINT: Were adding the images to our body.
//         $("body").append(`<img src=  ${avengerPics} >`);

//     //WHAT GOES HERE????? - HINT: Were adding the titles(text) to our body.
//     $("body").append(`<p>${avengerName}</p>`);

//   }
  
// };
