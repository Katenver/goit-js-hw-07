import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    )
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", createMarkup());

let simpleLightBoxGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


  function openLargeImage(evt) {
    evt.preventDefault();
  
    if (evt.target.nodeName !== "IMG") {
      return;
    }
  
    
    function onEscapeKeyPress(evt) {
      if (evt.key === "Escape") {
        instance.close();
      }
    }
    galleryEl.addEventListener("keydown", onEscapeKeyPress);
  }
console.log(galleryItems);
