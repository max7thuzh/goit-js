"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите логин");

const checkLoginValidity = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const checkIfLoginExists = function (logins, login) {
  return logins.includes(login);
};

const addLogin = function (logins, login) {
  if (checkLoginValidity(login) === true) {
    if (checkIfLoginExists(logins, login) === true) {
      alert("Такой логин уже используется!");
    } else {
      logins.push(login);
      alert("Логин успешно добавлен!");
    }
  } else {
    alert("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

addLogin(logins, login);
