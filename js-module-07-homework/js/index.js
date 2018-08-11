"use strict";

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/people",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

const root = document.querySelector("#root");

// =======================================
// ФУНКЦИИ СОЗДАНИЯ ЭЛЕМЕНТОВ КАРТОЧКИ
// =======================================

const createImage = img => {
  const cardImage = document.createElement("img");
  cardImage.classList.add("post__image");
  cardImage.setAttribute("src", img);
  cardImage.setAttribute("alt", "post image");

  return cardImage;
};

const createTitle = title => {
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("post__title");
  cardTitle.textContent = title;

  return cardTitle;
};

const createText = text => {
  const cardText = document.createElement("p");

  cardText.classList.add("post__text");
  cardText.textContent = text;

  return cardText;
};

const createButton = link => {
  const cardButton = document.createElement("button");

  cardButton.classList.add("button");
  cardButton.setAttribute("href", link);
  cardButton.textContent = "Read more";

  return cardButton;
};

// =======================================
// ФУНКЦИЯ СОЗДАНИЯ КАРТОЧЕК
// =======================================

const createPostCard = ({ img, title, text, link }) => {
  const post = document.createElement("div");
  post.classList.add("post");

  const cardImage = createImage(img);
  const cardTitle = createTitle(title);
  const cardText = createText(text);
  const cardButton = createButton(link);

  post.append(cardImage, cardTitle, cardText, cardButton);
  return post;
};

const createCards = posts => {
  const elements = posts.map(post => createPostCard(post));

  return elements;
};

// =======================================
// ПРИВЯЗКА К DOM-ДЕРЕВУ
// =======================================

const cards = createCards(posts);

root.append(...cards);
