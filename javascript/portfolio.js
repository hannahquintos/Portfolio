function openDropdown(){
  var hamburgerButton = document.getElementById("hamburgerMenu");
  var dropdownMenu = document.getElementById("dropdownMenu");
  var header = document.getElementById("header");
  var closeButton = document.getElementById("closeButton");
  
  dropdownMenu.style.display = "block";
  header.style.backgroundColor = "#949DA9";
  hamburgerButton.style.display = "none";
  closeButton.style.display = "block";
}

function closeDropdown(){
  var hamburgerButton = document.getElementById("hamburgerMenu");
  var dropdownMenu = document.getElementById("dropdownMenu");
  var header = document.getElementById("header");
  var closeButton = document.getElementById("closeButton");
  
  dropdownMenu.style.display = "none";
  header.style.backgroundColor = "white";
  hamburgerButton.style.display = "block";
  closeButton.style.display = "none";
}

//reset form after it's sent
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}