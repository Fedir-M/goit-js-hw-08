

import {images} from './images.js'

const galleryContainerEl = document.querySelector('.gallery');

images.forEach(image => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');
  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = image.original;
  const galleryImg = document.createElement('img');
  galleryImg.classList.add('gallery-image');
  galleryImg.src = image.preview;
  galleryImg.alt = image.description;
  galleryImg.setAttribute('data-source', image.original);
  // galleryLink.dataset.source = image.original; //просто чтобы запомнить 2й вариант добавления data-source

  galleryLink.appendChild(galleryImg);
  galleryItem.appendChild(galleryLink);
  galleryContainerEl.appendChild(galleryItem);
});

galleryContainerEl.addEventListener('click', onModalOpen);

function onModalOpen(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instanceImage = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1112" height="640">
`);

  instanceImage.show();

  if (instanceImage.visible()) {
    document.addEventListener("keydown", onKeyPressEsc);
  }

  function onKeyPressEsc(evt) {
    if (evt.code === "Escape") {
      instanceImage.close();
      document.removeEventListener("keydown", onKeyPressEsc);
    }
  }
}


