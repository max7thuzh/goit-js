"use strict";

const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  }
];

// CREATE FULLVIEW SECTION

const fullviewDiv = document.createElement("div");
fullviewDiv.classList.add("fullview");

const fullviewImage = document.createElement("img");
fullviewImage.setAttribute("src", "img/fullview-1.jpeg");
fullviewImage.setAttribute("alt", "alt text-1");

fullviewDiv.append(fullviewImage);

// CREATE PREVIEW SECTION

// CREATE LIST ITEM

const createItem = ({ preview, fullview, alt }) => {
  const item = document.createElement("li");

  const image = document.createElement("img");
  image.setAttribute("src", preview);
  image.setAttribute("data-fullview", fullview);
  image.setAttribute("alt", alt);

  item.append(image);

  return item;
};

// ADD TO ITEMS TO LIST

const list = document.createElement("ul");
list.classList.add("preview");

const createItems = galleryItems => {
  const elements = galleryItems.map(galleryItem => createItem(galleryItem));

  return elements;
};

const items = createItems(galleryItems);

list.append(...items);

list.firstElementChild.firstElementChild.classList.add("checked");

// ADD CONTENT TO ROOT

const imageGallery = document.querySelector(".js-image-gallery");

imageGallery.append(fullviewDiv, list);

// EVENTS

list.addEventListener("click", handlePreviewListClick);

function handlePreviewListClick(event) {
  if (event.target.nodeName !== "IMG") return;

  const activeElement = document.querySelector(".checked");
  activeElement.classList.remove("checked");

  event.target.classList.add("checked");

  const fullviewSrc = event.target.getAttribute("data-fullview");
  const fullviewAlt = event.target.getAttribute("alt");

  fullviewImage.setAttribute("src", fullviewSrc);
  fullviewImage.setAttribute("alt", fullviewAlt);
}
