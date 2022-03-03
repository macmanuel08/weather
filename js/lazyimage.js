// Getting all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    //get 'src' attr and set its value to 'data-src' value
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// optional parameters being set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

if ('IntersectionObserver' in window) {
    // if it's supported
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    //load images if necessary
    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });

} else { //load  all images if not supported
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}