document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  let locationBox = document.getElementById("location");
  let searchArrow = document.getElementById("search_arrow");
  let searchAddress = document.getElementById("search_address");

  // Adding event listener
  searchAddress.addEventListener("focusin", function () {
    locationBox.style.visibility = "visible";
    searchArrow.style.transform = "rotate(180deg)";
    location.style.opacity = 1;
  });
  searchAddress.addEventListener("focusout", function () {
    locationBox.style.visibility = "hidden";
    searchArrow.style.transform = "rotate(0deg)";
    location.style.opacity = 0;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the login link and popup elements
  const loginLink = document.getElementById("login-link");
  const loginPopup = document.getElementById("login-popup");
  const closePopupButton = document.getElementById("close-popup");

  // Function to show the popup
  function showLoginPopup() {
    loginPopup.style.display = "flex";
  }

  // Function to hide the popup
  function hideLoginPopup() {
    loginPopup.style.display = "none";
  }

  // Add event listener to the login link
  loginLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    showLoginPopup();
  });

  // Add event listener to the close button
  closePopupButton.addEventListener("click", function () {
    hideLoginPopup();
  });

  // Optional: Hide the popup when clicking outside the pop-content
  loginPopup.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
      hideLoginPopup();
    }
  });
});
