import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector("gallery-items.js");
const cardsImage = createImage(img);
galleryEl.insertAdjacentHTML("beforeend", cardsImage);
//console.log(createImage(img));

function createImage(img) {
  return img
    .map(() => {
      return (
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
              class="gallery__image"
              src="small-image.jpg"
              data-source="large-image.jpg"
              alt="Image description"
            />
          </a>
        </div>
      );
    })
    .join("");
}
console.log(createImage);
console.log(galleryItems);

//Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

//Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Реализация делегирования на div.gallery и получение url большого изображения.

//Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
//Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
