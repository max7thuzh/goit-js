"use strict";

// ===================================
// REFS
// ===================================

const refs = {
  getAllUsersForm: document.querySelector(".js-getAllUsersForm"),
  getAllUsersButton: document.querySelector(".js-getAllUsersButton"),
  getAllUsersResult: document.querySelector(".js-getAllUsersResult"),

  getUserByIdForm: document.querySelector(".js-getUserByIdForm"),
  getUserByIdInput: document.querySelector(".js-getUserByIdInput"),
  getUserByIdButton: document.querySelector(".js-getUserByIdButton"),
  getUserByIdResult: document.querySelector(".js-getUserByIdResult"),

  addUserForm: document.querySelector(".js-addUserForm"),
  addUserButton: document.querySelector(".js-addUserButton"),
  addUserInputName: document.querySelector(".js-addUserInputName"),
  addUserInputAge: document.querySelector(".js-addUserInputAge"),

  removeUserForm: document.querySelector(".js-removeUserForm"),
  removeUserInputId: document.querySelector(".js-removeUserInputId"),
  removeUserButton: document.querySelector(".js-removeUserButton"),

  updateUserForm: document.querySelector(".js-updateUserForm"),
  updateUserInputId: document.querySelector(".js-updateUserInputId"),
  updateUserInputName: document.querySelector(".js-updateUserInputName"),
  updateUserInputAge: document.querySelector(".js-updateUserInputAge"),
  updateUserButton: document.querySelector(".js-updateUserButton")
};

// ===================================
// EVENTS
// ===================================

refs.getAllUsersButton.addEventListener("click", getAllUsers);
refs.getUserByIdButton.addEventListener("click", getUserById);
refs.addUserButton.addEventListener("click", addUser);
refs.removeUserButton.addEventListener("click", removeUser);
refs.updateUserButton.addEventListener("click", updateUser);

// ===================================
// FUNCTION getAllUsers
// ===================================

function getAllUsers(event) {
  event.preventDefault();

  fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("Error while fetching");
    })
    .then(users => users.data)
    .then(arr => {
      const tableHead = `
      <table class="js-table">
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </table>
      `;

      const tableBody = arr.reduce(
        (acc, element) =>
        acc +
        `<tr>
          <td>${element.id}</td>
          <td>${element.name}</td>
          <td>${element.age}</td>
          </tr>`,
        ""
      );

      refs.getAllUsersResult.innerHTML = tableHead;

      const table = document.querySelector(".js-table");
      table.insertAdjacentHTML("beforeend", tableBody);
    })
    .catch(error => console.log(error));

  refs.getAllUsersForm.reset();
}

// ===================================
// FUNCTION getUserById
// ===================================

function getUserById(event) {
  event.preventDefault();

  if (refs.getUserByIdInput.value.trim() === "") return alert("Empty Value");

  fetch(
      `https://test-users-api.herokuapp.com/users/${refs.getUserByIdInput.value}`
    )
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("Error while fetching");
    })
    .then(user => user.data)
    .then(data => {
      const markup = `
      <p>ID: ${data.id}</p>
      <p>Name: ${data.name}</p>
      <p>Age: ${data.age}</p>`;

      refs.getUserByIdResult.innerHTML = markup;
    })
    .catch(error => console.log(error));

  refs.getUserByIdForm.reset();
}

// ===================================
// FUNCTION addUser
// ===================================

function addUser(event) {
  event.preventDefault();

  if (refs.addUserInputName.value.trim() === '' || refs.addUserInputAge.value.trim() === '') {
    refs.addUserForm.reset();
    alert("Empty Value");
    return;
  } else {
    fetch("https://test-users-api.herokuapp.com/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: `${refs.addUserInputName.value}`,
          age: `${refs.addUserInputAge.value}`
        })
      })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error("Error while fetching");
      })
      .then(data => {
        alert("New User Added");
        console.log(data);
      })
      .catch(error => console.log(error));

    refs.addUserForm.reset();
  }
}

// ===================================
// FUNCTION removeUser
// ===================================

function removeUser(event) {
  event.preventDefault();

  const id = refs.removeUserInputId.value;

  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
      method: 'DELETE'
    })
    .then(() => alert("Success!"))
    .catch(error => console.log(error));

  refs.removeUserForm.reset();
}

// ===================================
// FUNCTION updateUser
// ===================================

function updateUser(event) {
  event.preventDefault();

  const id = refs.updateUserInputId.value;

  const updatedUser = {
    name: refs.updateUserInputName.value,
    age: refs.updateUserInputAge.value
  }

  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) return response.json();
  })
  .then(() => alert("Success!"))
  .catch(error => console.log(error));

  refs.updateUserForm.reset();
}
