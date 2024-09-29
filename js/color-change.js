// color variables defined in the root element of css
const colorVariables = [
   '--animation-color-one',
   '--animation-color-two',
   '--animation-color-three',
   '--animation-color-four',
   '--animation-color-five',
   '--animation-color-six'
];

// generate a random color with a minimum brightness
// function getRandomColor() {
//    const minBrightness = 0x333333;  // Set a lower limit to avoid dark colors
//    const randomHex = Math.floor(Math.random() * (0xFFFFFF - minBrightness) + minBrightness);
//    return "#" + randomHex.toString(16).padStart(6, '0');
// }

// generate a random color with an upper brightness threshold
function getRandomColor() {
   let r, g, b;
   let maxBrightness = 50;  // Upper limit for brightness to keep colors on the darker end

   do {
       r = Math.floor(Math.random() * 256);  // Random red
       g = Math.floor(Math.random() * 256);  // Random green
       b = Math.floor(Math.random() * 256);  // Random blue
   } while ((r + g + b) / 3 > maxBrightness);  // Ensure average brightness is below the threshold

   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // Convert to hex and attach the # symbol, return 
}

// Assign a random color value
const randomColor = getRandomColor();   // Call the function to get a random color

let currentIndex = 0;  // Initialize the index of the color variable

function updateColor() {
   const randomColor = getRandomColor();   // call function to get a random color
   document.documentElement.style.setProperty(colorVariables[currentIndex], randomColor);  // Set the color to the root element
   currentIndex = (currentIndex + 1) % colorVariables.length;                             // Move to the next color variable in the root element
   setTimeout(updateColor, 30000);                                                     // Call the function again after 2 seconds   
}

updateColor();  // Start the cycle of updating colors