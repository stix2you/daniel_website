
// the following functions are used to toggle the light/dark theme and save the preference in local storage

function toggleTheme() {   // function to toggle the theme
   let isDark = document.body.classList.toggle("dark-theme");  // toggle the dark-theme class on the body
   let isActive = document.getElementById('toggle').classList.toggle("active");  // toggle the active class on the toggle button
   localStorage.setItem('theme', isDark ? 'dark' : 'light');   // save the theme preference in local storage
   localStorage.setItem('active', isActive ? 'active' : 'inactive');   // save the active preference in local storage   
}

function loadTheme() {
   const savedTheme = localStorage.getItem('theme');  // get the saved theme preference from local storage
   if (savedTheme === 'dark') {
       document.body.classList.add('dark-theme');
       document.getElementById('toggle').classList.remove('active');
   } else {
       document.body.classList.remove('dark-theme');
       document.getElementById('toggle').classList.add('active');
   }
}

// Call loadTheme() when the page loads to set the theme based on the saved preference
window.onload = loadTheme;