const global = {
  currentPage: window.location.pathname,
};

// Init App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie details");
      break;
    case "/tv-details.html":
      console.log("TV details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
