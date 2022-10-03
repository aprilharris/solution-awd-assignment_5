function loadPuppies(){
  let puppyArray = [
"img/p1.jpg",
"img/p2.jpg",
"img/p3.jpg"
  ];
	

// let imgs = puppyArray.map(function(URL) {
puppyArray.map(function (URL) {
	let img = new Image();
	img.src = URL;
	$('div').append(img);
	return img;
});

};