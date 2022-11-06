import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

function createMarkup() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`
    )
    .join("");
}
galleryEl.insertAdjacentHTML("afterbegin", createMarkup());

galleryEl.addEventListener("click", openLargeImage);

function openLargeImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img
    src= ${evt.target.dataset.source}
    alt= ${evt.target.alt}
/>`,
    {
      onShow: () => document.addEventListener("keydown", onEscapeKeyPress),
      onClose: () => document.removeEventListener("keydown", onEscapeKeyPress),
    }
  );

  instance.show();

  function onEscapeKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
  galleryEl.addEventListener("keydown", onEscapeKeyPress);
}
