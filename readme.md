# Assignment 5: For Loops Practice
### Challenge 1:
Notice the provided jQuery code on line 9 in your script.js file that appends one image from the array photos. 
Using that as an example, write a jQuery line of code for each of the remaining images in the array photos.

Add the following 2 lines of code under line 8$("#puppies").append(`<img src=${puppies[1]} >`);
$("#puppies").append(`<img src=${puppies[2]} >`);

### Challenge 2: 
Use a **for loop** to assemble the Avengers. The Avengers should load in below the button element.

**Step 1:** 
Find the following arrays in your script.js file:
- avengerPics
- avengerNames
Can you describe the elements of these arrays...what are they?

*Solution:*
They are images of the following Avengers characters:
  - Iron Man
  - Captain America
  - The Hulk

Next, find the function named fetchAvengers() in your script.js file

Currently fetchAvengers()'s code block is empty.

Using jQuery's append() method and template literals, let's write a code block that iterates through avengerPics() and "appends" each image to the <div id="avengers"> element of your html file.

*Solution*
for(let i=0; i<avengerPics.length; i++) {
$('#avengers').append('<img src='${avengerPics[i]}' />)
}


**Step 2:** 
Inside the img folder, there are additional images of other members of the Avengers Team, namely: Black Widow, Groot, and Gamora. The respective filenames for these characters are:

  - avenger4.jpg 
  - avenger5.jpg
  - avenger6.jpg

Using the syntax provided on lines 14-16 of your script.js file, add the remaining avenger team members to avengerPics array.

*Solution:*

let avengerPics = [
  "img/avenger1.jpg",
  "img/avenger2.jpg",
  "img/avenger3.jpg",
  "img/avenger4.jpg",
  "img/avenger5.jpg",
  "img/avenger6.jpg"
];


**Step 3:** 
Create a new array called avengerNames.

Add the following elements to avengerNames:
  "Iron Man",
  "Captain America",
  "The Incredible Hulk",
  "Black Widow",
  "Groot",
  "Gamora"

*Solution:*

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

*Solution*

 function fetchAvengers() {
  for(let i=0; i<avengerPics.length; i++) {
    $('#avengers').append(`<img src='${avengerPics[i]}' />`)
    $('#avengers').append(`<h2>${avengerNames[i]}</>`)
  }
   
};

