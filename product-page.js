//color swatch script
function selectColor(colorId) {
  const colors = document.querySelectorAll(".color");
  colors.forEach((color) => {
    console.log(color.classList);
    color.classList.remove("selected");
  });

  const selectedColor = document.getElementById(colorId);
  if (selectedColor && !selectedColor.classList.contains("unavailable-color")) {
    selectedColor.classList.add("selected");
  }
}

document
  .querySelector(".toggle-description")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var fullDescription = document.querySelector(".full-description");
    var shortDescription = document.querySelector(".short-description");

    if (fullDescription.classList.contains("hidden")) {
      fullDescription.classList.remove("hidden");
      shortDescription.classList.remove("faded");
      this.textContent = "Voir moins"; // Change button text
    } else {
      fullDescription.classList.add("hidden");
      shortDescription.classList.add("faded");
      this.textContent = "Voir plus"; // Change button text
    }
  });

// toggle accordion script
function toggleAccordion(element) {
  var content = element.nextElementSibling;
  var icon = element.querySelector(".accordion-icon");

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.style.display = "block";
    icon.textContent = "−";
  }
}

// nav bar script
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const hoverBar = document.querySelector(".hover-bar");
  const hoverContents = document.querySelectorAll(".hover-content");

  let timeout;

  function showHoverBar(targetId) {
    clearTimeout(timeout);
    hoverBar.classList.add("active");
    // Hide content
    hoverContents.forEach((content) => content.classList.remove("active"));

    // Show content
    document.getElementById(targetId).classList.add("active");
  }

  function hideHoverBar() {
    timeout = setTimeout(() => {
      hoverBar.classList.remove("active");
      hoverContents.forEach((content) => content.classList.remove("active"));
    }, 200);
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const targetId = item.getAttribute("data-target");
      showHoverBar(targetId);
    });
  });

  hoverBar.addEventListener("mouseenter", function () {
    clearTimeout(timeout);
  });

  hoverBar.addEventListener("mouseleave", hideHoverBar);
});

// Slider script
function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalImages = dots.length;
let index = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

document.querySelector(".left-arrow").addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages;
  updateSlider();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  index = (index + 1) % totalImages;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// Change logo Mobile/Desktop
window.addEventListener("resize", function () {
  const logo = document.querySelector(".header-logo");
  if (window.innerWidth <= 768) {
    logo.src = "assets/icons/mobile-logo.png";
  } else {
    logo.src = "assets/icons/logo_maison_michel_black.png";
  }
});

// Custom select script
document.addEventListener("DOMContentLoaded", function () {
  const selectBox = document.querySelector(".custom-select");
  const selectedOption = document.querySelector(".selected-option");
  const options = document.querySelectorAll(".option");
  const hiddenInput = document.querySelector("#selected-value");

  // Set default selected option
  let defaultOption = document.querySelector(".option.selected");
  if (!defaultOption) {
    defaultOption = options[0];
  }

  selectedOption.innerHTML =
    defaultOption.innerHTML +
    `<img class="select-dropdown" src="assets/icons/arrow-down-black.png" alt="arrow-down">`;
  hiddenInput.value = defaultOption.getAttribute("data-value");

  // Toggle dropdown on click
  selectedOption.addEventListener("click", function () {
    selectBox.classList.toggle("active");
  });

  // Select option
  options.forEach((option) => {
    option.addEventListener("click", function () {
      selectedOption.innerHTML =
        this.innerHTML +
        `<img class="select-dropdown" src="assets/icons/arrow-down-black.png" alt="arrow-down">`;
      hiddenInput.value = this.getAttribute("data-value");

      // Update state
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      selectBox.classList.remove("active");
    });
  });

  // Close dropdown
  document.addEventListener("click", function (e) {
    if (!selectBox.contains(e.target)) {
      selectBox.classList.remove("active");
    }
  });
});

// change country and currency script
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    // Toggle dropdown visibility
    toggle.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent closing immediately
      closeAllDropdowns();
      dropdown.classList.toggle("active");
    });

    // Select an option
    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        toggle.innerHTML = `${event.target.innerHTML} <img src="assets/icons/arrow-down.png" alt="arrow-down">`;
        dropdown.classList.remove("active");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function () {
    closeAllDropdowns();
  });

  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
  }
});

//size selection
document.querySelectorAll(".size").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".size")
      .forEach((btn) => btn.classList.remove("selected"));

    if (!this.classList.contains("unavailable")) {
      this.classList.add("selected");
    }
  });
});

// Function to open the modal
function openModal() {
  document.getElementById("sizeModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("sizeModal").style.display = "none";
}

// Close the modal if the user clicks outside
window.onclick = function (event) {
  var modal = document.getElementById("sizeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
