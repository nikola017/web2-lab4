document.addEventListener('DOMContentLoaded', () => {
    const largestDiffSection = document.querySelector('.largest-difference');
    const images = ['largest_image.jpg', 'smallest_image.png']; // Imena slika

    images.forEach((image, index) => {
        // Dodaj sliku
        const img = document.createElement('img');
        img.src = `images/largeDifference/${image}`;
        img.alt = image;
        largestDiffSection.appendChild(img);

        // Dodaj simbol '>' između slika
        if (index < images.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'separator';
            separator.textContent = '>';
            largestDiffSection.appendChild(separator);
        }
    });
});
