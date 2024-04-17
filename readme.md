# Assignment 5: For Loops Practice
### Challenge 1:
Using the append() method, manually load the puppy images into the browser.

(Hint: $("div.puppies").append(`<img src=${puppies[0]} />`); )


### Challenge 2: 
Use a **for loop** to assemble the Avengers. The Avengers should load in below the button element.

**Step 1:** 
Find the following arrays in your script.js file:
- avengerPics
- avengerNames
Can you describe the elements of these arrays...what are they?

*Solution:*
The img folder contains images of the following Avengers characters:
  - Iron Man
  - Captain America
  - The Hulk

Next, let's store the images in an array called avengerPics:

  let avengerPics = [ "img/avenger1.jpg"...];

Now, let's store the names of the avengers in an array called avengerNames:

  let avengerNames = [ 'Iron Man', 'Captain America', 'The Hulk' ];

Next,  create a fetchAvengers() function in your JS file:

function fetchAvengers() {

}

Currently the fetchAvengers()'s function body is empty.

Using jQuery's append() method and template literals, let's write a code block that iterates through the avengerPics array and "appends" each element (or each image) of the array to the <div class="avengers"> element of your html file. At this point, the entire function should look like this:


function fetchAvengers() {
  for(let i=0; i<avengerPics.length; i++) {
    $('.avengers').append('<img src='${avengerPics[i]}' />)
  }
}

**Step 2:** 
Inside the img folder, there are additional images of other members of the Avengers Team, namely: Black Widow, Groot, and Gamora. The respective filenames for these characters are:

  - avenger4.jpg 
  - avenger5.jpg
  - avenger6.jpg

Using the syntax provided on lines 14-16 of your script.js file, add the remaining avenger team members to avengerPics array.

Your new avengerPics array should look like this:

let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg",
  "img/avenger4.jpg",
  "img/avenger5.jpg",
  "img/avenger6.jpg"
];


**Step 3:** 
Update your avengerNames array so that it looks like this:

let avengerNames = [
  "Iron Man",
  "Captain America",
  "The Incredible Hulk",
  "Black Widow",
  "Groot",
  "Gamora"
];



**Step 4:**
Refer back to how you iterated through the images in step 1. Using that as a guide, add some code to your fetchAvengers() function that iterates through the avengerNames array and appends each avenger's name to its respective character.

The latest version of your fetchAvengers function should look like this:

 function fetchAvengers() {
  for(let i=0; i<avengerPics.length; i++) {
    $('.avengers').append(`<img src='${avengerPics[i]}' />`)
    $('.avengers').append(`<h2>${avengerNames[i]}</h2>`)
  }
   
};

