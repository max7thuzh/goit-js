"use strict";

const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "m4ngo1zh4ackz0r";
const inputLogin = prompt("Введите логин");

const alertCancel = "Отменено пользователем";
const alertWelcome = "Добро пожаловать!";
const alertAccessDenied = "Доступ запрещен!";

if (inputLogin === null) {
  alert(alertCancel);
} else if (inputLogin === ADMIN_LOGIN) {
  const inputPass = prompt("Введите пароль");

  if (inputPass === null) {
    alert(alertCancel);
  } else if (inputPass === ADMIN_PASSWORD) alert(alertWelcome);
  else {
    alert(alertAccessDenied);
  }
} else {
  alert(alertAccessDenied);
}
