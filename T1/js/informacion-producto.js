// Get the image element
const image = document.getElementById('changing-img');

// Add a click event listener to the image
image.addEventListener('click', () => {
    // Check the current image source
    if (image.src.includes('640x480.jpg')) {
        // Switch to the 1280x1024 version
        image.src = image.src.replace('640x480', '1280x1024');
    } else if (image.src.includes('1280x1024.jpg')) {
        // Switch back to the 640x480 version
        image.src = image.src.replace('1280x1024', '640x480');
    }
});