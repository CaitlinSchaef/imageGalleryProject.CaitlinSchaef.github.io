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

// Declaring the array of image filenames and alt text 

const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg': 'Image of eye',
    'pic2.jpg': 'Image of marbled rock',
    'pic3.jpg': 'Image of purple flowers',
    'pic4.jpg': 'Image of Egyptian Tomb',
    'pic5.jpg': 'Image of moth'
};

// However I want a function that changes the displayed image with a click.
/* Looping through images 
Adding a for construction is easiest path, if more time you could try a forEach*/
for (const image of imageNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'assets/' + image);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


    // next we need to add elements to the button that the click function occurs on
    /* Wiring up the Darken/Lighten button */ 
    // this event listener will go between dark and light with the overlay element
    btn.addEventListener('click', function() {
        overlay.classList.toggle('dark');
        if (overlay.classList.contains('dark')) {
            btn.textContent = 'Lighten';
 // i'm not sure if this is changing the pictures or just the button?
        } else {
            btn.textContent = 'Darken';
        }
    });
    
    
    //woohoo!