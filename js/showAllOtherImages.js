document.addEventListener('DOMContentLoaded', () => {
    const allImagesSection = document.querySelector('#imageGallery');
    const otherImages = ['bird.jpg', 'BlueRook.png', 'coding-logo.png', 'dragon.jpg', 'kratos.jpg', 'low_res_bird.png', 'silence.jpg', 'sillyFace.png', 'soccer.png', 'them_pixels.jpg'];

    otherImages.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.alt = image;
        allImagesSection.appendChild(img);
    });
});
