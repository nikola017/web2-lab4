document.addEventListener('DOMContentLoaded', () => {
    const zebrasSection = document.querySelector('.featured-zebras');
    const zebraImages = ['zebra_100.jpg', 'zebra_90.jpg', 'zebra_60.jpg', 'zebra_20.jpg']; // Dodaj sve potrebne slike

    zebraImages.forEach(image => {
        const img = document.createElement('img');
        img.src = `images/zebras/${image}`;
        img.alt = `Zebra ${image.split('_')[1]}`;
        zebrasSection.appendChild(img);
    });
});
