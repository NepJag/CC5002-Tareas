// Get the image element
const image = document.getElementById('changing-img');

// Add a click event listener to the image
image.addEventListener('click', () => {
    // Split the image source by "/"
    const parts = image.src.split('/');

    // Get the last part of the source (the file name)
    const fileName = parts[parts.length - 1];

    // Split the file name by "."
    const fileNameParts = fileName.split('.');

    // Get the part before the file extension
    const nameWithoutExtension = fileNameParts[0];

    // Check if the name contains "_640x480"
    if (nameWithoutExtension.endsWith('_640x480')) {
        // Replace "_640x480" with "_1280x1024"
        const newFileName = nameWithoutExtension.replace('_640x480', '_1280x1024');

        // Construct the new image source
        const newImageSrc = parts.slice(0, -1).join('/') + '/' + newFileName + '.' + fileNameParts[1];

        // Update the image source
        image.src = newImageSrc;
    } else if (nameWithoutExtension.endsWith('_1280x1024')) {
        // Replace "_1280x1024" with "_640x480"
        const newFileName = nameWithoutExtension.replace('_1280x1024', '_640x480');

        // Construct the new image source
        const newImageSrc = parts.slice(0, -1).join('/') + '/' + newFileName + '.' + fileNameParts[1];

        // Update the image source
        image.src = newImageSrc;
    }
});