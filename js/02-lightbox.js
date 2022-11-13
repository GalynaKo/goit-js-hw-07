import { galleryItems } from "./gallery-items.js";
//import SimpleLightbox from "simplelightbox";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const createCards = galleryItems.map(imageEl).join("");
//galleryEl.addEventListener("click", onClickCard);
function imageEl({ preview, original, description }) {
  return `
  <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
   </li>
  `;
}
galleryEl.innerHTML = ("afterbegin", createCards);

//Посмотри в документации секцию «Options» и добавь отображение подписей к
//изображениям из атрибута alt.Пусть подпись будет снизу и появляется
//через 250 миллисекунд после открытия изображения.
const moove = new SimpleLightbox("ul.gallery a", {
  captions: true,
  captionsDate: "alt",
  captionsDelay: 250,
});
