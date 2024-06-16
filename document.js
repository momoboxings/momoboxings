document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    const showImage = index => {
        images.forEach((img, i) => {
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    };

    setInterval(nextImage, 3000);

    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    const nextPage = () => {
        const activePage = document.querySelector('.form-page.active');
        if (activePage.nextElementSibling && activePage.nextElementSibling.classList.contains('form-page')) {
            activePage.classList.remove('active');
            activePage.nextElementSibling.classList.add('active');
        }
    };

    const prevPage = () => {
        const activePage = document.querySelector('.form-page.active');
        if (activePage.previousElementSibling && activePage.previousElementSibling.classList.contains('form-page')) {
            activePage.classList.remove('active');
            activePage.previousElementSibling.classList.add('active');
        }
    };

    document.querySelectorAll('[type="button"]').forEach(button => {
        button.addEventListener('click', event => {
            if (event.target.textContent === 'Suivant') nextPage();
            if (event.target.textContent === 'Précédent') prevPage();
        });
    });
});
