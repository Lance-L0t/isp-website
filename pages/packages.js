const homeBtn = document.querySelector('.home');
const businessBtn = document.querySelector('.business');
const card1 = document.querySelector('.card1');

const businessSection = document.querySelector('.business-plan');
const homeSection = document.querySelector('.home-plan');

function showHomeTab(){
    homeBtn.style.display = "inline";
    card1.style.display = 'block';
    homeBtn.style.backgroundColor = "#007bff";
    businessBtn.style.backgroundColor = "transparent";
    homeBtn.style.border = 'none';
    businessBtn.style.border = "1px solid rgba(7, 7, 7, 0.21)";
    businessSection.style.opacity = '0';
    homeSection.style.opacity = '1';
    
}

function showBusinessTab(){
    businessBtn.style.display = "inline";
    card1.style.display = 'none';
    homeBtn.style.backgroundColor = 'transparent';
    businessBtn.style.border = 'none';
    homeBtn.style.border = "1px solid rgba(7, 7, 7, 0.21)";
    businessBtn.style.backgroundColor = "#007bff";
    businessBtn.style.cursor = "";
    homeBtn.style.cursor = "pointer";
    homeSection.style.opacity = "0";
    businessSection.style.opacity = "1";
}

homeBtn.addEventListener("click", showHomeTab);
businessBtn.addEventListener("click", showBusinessTab);


//AI Generated Code
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark");

  // Optional: Save preference to LocalStorage
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme on refresh
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }
};


