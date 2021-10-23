let users = [];
let cont = 0;
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  addToArray(formData);
  form.reset();
});

function convertToObject(formData) {
  let user = formData.get("user");
  let password = formData.get("password");
  let objUser = {
    user: user,
    password: password,
  };
  addToArray(objUser);
}
function addToArray(objUser) {
  users.push(objUser);
  console.log(users);
}
