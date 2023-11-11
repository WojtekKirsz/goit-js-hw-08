// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

function generateGalleryItem(item) {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  return galleryItem;
}
