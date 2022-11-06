import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

function createMarkup () {
return galleryItems.map(({preview, original, description}) => 
   `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </div>`).join('');
}
galleryEl.insertAdjacentHTML('afterbegin', createMarkup ())

galleryEl.addEventListener('click', openLargeImage);

function openLargeImage (evt){
evt.preventDefault();
const instance = basicLightbox.create(`
<img
    src= ${evt.target.dataset.source}
/>
`)
instance.show()
}