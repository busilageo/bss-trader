function setBodyHeight() {
    const header = document.querySelector('header');
    const main = document.querySelector('.main');
    const headerHeight = header.offsetHeight;
    const viewportHeight = window.innerHeight;

    main.style.height = (viewportHeight - headerHeight) + 'px';
}

// Set initial height
setBodyHeight();

// Adjust height on window resize
window.addEventListener('resize', setBodyHeight);