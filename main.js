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
]; 
/* Looping through images */

const newImage = document.createElement('ThumbarImages');
newImage1.ThumbarImages('assets/pic1.jpg', "Image of eye");
newImage2.ThumbarImages('assets/pic2.jpg', "Image of marbled rock");
newImage3.ThumbarImages('assets/pic3.jpg', "Image of purple flowers");
newImage4.ThumbarImages('assets/pic4.jpg', "Image of Egyptian Tomb");
newImage5.ThumbarImages('assets/pic5.jpg', "Image of moth");

// make a new loop using the forEach iterative function, calls each array
images.forEach(imageData); {
    const newImage = document.createElement('img');
    newImage.src = imageData.src;
    newImage.alt = imageData.alt;
    thumbBar.appendChild(newImage);
}


// add the click/button event 
thumbBar.addEventListener('click', function(event)); {
    // this checks if the click occurs, then next check if it's an image element
    if (event.target.tagName === 'img') {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
      }
    }
// next we need to add elements to the button that the click function occurs on
/* Wiring up the Darken/Lighten button */ 
// this event listener will go between dark and light with the overlay element
btn.addEventListener('click', function() {
    const currentClass = overlay.getAttribute('class');
    if (currentClass === 'dark') {
        overlay.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
    } else {
        overlay.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
    }
});


//woohoo!
