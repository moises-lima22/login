function showPassword(id) {
  if (id.getAttribute("type") == "password") {
    id.setAttribute("type", "text");
  } else {
    id.setAttribute("type", "password");
  }

  return console.log(id);
}
