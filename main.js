/* Declare a const array listing the filenames of each image, such as 'pic1.jpg'.
Declare a const object listing the alternative text for each image.
Loop through the array of filenames, and for each one, insert an <img> element inside 
the thumb-bar <div> that embeds that image in the page along with its alternative text.
Add a click event listener to each <img> inside the thumb-bar <div> so that, when they are clicked,
the corresponding image and alternative text are displayed in the displayed-img <img> element.
Add a click event listener to the <button> so that when it is clicked, a darken effect is applied to the full-size image. 
When it is clicked again, the darken effect is removed again. */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames  and alt text */
const images = [
    { src: 'assets/pic1.jpg', alt: "Image of eye" },
    { src: 'assets/pic2.jpg', alt: "Image of marbled rock" },
    { src: 'assets/pic3.jpg', alt: "Image of purple flowers" },
    { src: 'assets/pic4.jpg', alt: "Image of Egyptian Tomb" },
    { src: 'assets/pic5.jpg', alt: "Image of moth" }
]
/* Looping through images */

const newImage = document.createElement('ThumbarImages');
newImage1.ThumbarImages('assets/pic1.jpg', "Image of eye");
newImage2.ThumbarImages('assets/pic2.jpg', "Image of marbled rock");
newImage3.ThumbarImages('assets/pic3.jpg', "Image of purple flowers");
newImage4.ThumbarImages('assets/pic4.jpg', "Image of Egyptian Tomb");
newImage5.ThumbarImages('assets/pic5.jpg', "Image of moth");

newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
/* Wiring up the Darken/Lighten button */
