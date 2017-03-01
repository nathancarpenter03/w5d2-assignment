createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

createCard({
    src: "http://unsplash.it/400/300?random",
    caption: 'A picture of something'
});

function createCard(image) {
    var card = `<div class = "card col-sm-3">
      <img src = "${image.src}" alt ="image" />
      <h5 class = "card-caption">${image.caption}</h5>`;
    document.querySelector('#app').innerHTML += card;
}

