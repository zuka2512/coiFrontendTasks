document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.image-text-section');
    const button = section.querySelector('.image-text-section__button');
    const textElement = section.querySelector('.image-text-section__text');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                section.classList.add('image-text-section--visible');
            } else {
                section.classList.remove('image-text-section--visible');
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(section);

    button.addEventListener('click', () => {
        button.style.display = 'none';
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'On the other hand, we denounce with righteous indignation...';
        newParagraph.className = 'image-text-section__text';
        section.querySelector('.image-text-section__content').appendChild(newParagraph);
    });
});
