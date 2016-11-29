
var button = document.createElement('button')
button.textContent = 'Submit'

button.addEventListener('click', () => {
  var project_name = document.getElementById("name").value
  /*var project_image = document.getElementById("image").value*/
  var project_category = document.getElementById("category").value
  var project_description = document.getElementById("description").value
  var project_goal = document.getElementById("goal").value

  console.log(project_name)
  console.log(project_category)
  console.log(project_description)
  console.log(project_goal)

  document.getElementById("name").value = ""
  document.getElementById("category").value = ""
  document.getElementById("description").value = ""
  document.getElementById("goal").value = ""
  location.href = "./submitted.html";

}, false)

document.body.appendChild(button)
