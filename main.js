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

/* Declaring the array of image filenames and alt text */
const images = [
  { src: 'assets/pic1.jpg', alt: "Image of eye" },
  { src: 'assets/pic2.jpg', alt: "Image of marbled rock" },
  { src: 'assets/pic3.jpg', alt: "Image of purple flowers" },
  { src: 'assets/pic4.jpg', alt: "Image of Egyptian Tomb" },
  { src: 'assets/pic5.jpg', alt: "Image of moth" }
]; 

/* Looping through images */
// I think I need to establish new images?
// make a new loop using the forEach iterative function, calls each array
images.forEach(imageData); 
    const newImage1 = document.createElement('img');
    newImage1.src = 'assets/pic1.jpg';
    newImage1.alt = "Image of eye";
    
    const newImage2 = document.createElement('img');
    newImage2.src = 'assets/pic2.jpg';
    newImage2.alt = "Image of marbled rock";
    
    const newImage3 = document.createElement('img');
    newImage3.src = 'assets/pic3.jpg';
    newImage3.alt = "Image of purple flowers";
    
    const newImage4 = document.createElement('img');
    newImage4.src = 'assets/pic4.jpg';
    newImage4.alt = "Image of Egyptian Tomb";
    
    const newImage5 = document.createElement('img');
    newImage5.src = 'assets/pic5.jpg';
    newImage5.alt = "Image of moth";
    
    thumbBar.appendChild(newImage1);
    thumbBar.appendChild(newImage2);
    thumbBar.appendChild(newImage3);
    thumbBar.appendChild(newImage4);
    thumbBar.appendChild(newImage5);
    
    /* the event listener needs to go IN this function, not after, 
    so every image has this function, could have done this as a whole by naming
    and applying as a unit but i didnt */
    // add the click/button event 
    // try a switch statement, basically changing out the images in array
    
    newImage1.addEventListener('click', function(event) {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    
        
        newImage2.addEventListener('click', function(event) {
            displayedImage.src = event.target.src;
            displayedImage.alt = event.target.alt;
        });
        
        newImage3.addEventListener('click', function(event) {
            displayedImage.src = event.target.src;
            displayedImage.alt = event.target.alt;
        });
        
        newImage4.addEventListener('click', function(event) {
            displayedImage.src = event.target.src;
            displayedImage.alt = event.target.alt;
        });
        
        newImage5.addEventListener('click', function(event) {
            displayedImage.src = event.target.src;
            displayedImage.alt = event.target.alt;
        });
    });
    
    
    
    // next we need to add elements to the button that the click function occurs on
    /* Wiring up the Darken/Lighten button */ 
    // this event listener will go between dark and light with the overlay element
    btn.addEventListener('click', function() {
        overlay.classList.toggle('dark');
        if (overlay.classList.contains('dark')) {
            btn.textContent = 'Lighten';
        } else {
            btn.textContent = 'Darken';
        }
    });
    
    
    //woohoo!