// Get the modal
var modal = document.getElementById("myModal");

// Get the images that open the modal
var imgs = document.querySelectorAll('.case-study-timeline-image, .case-study-timeline-image-gif');

// Get the image and caption inside the modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all images to apply the modal functionality to open the modal
imgs.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src; // Set the src of the modal image to the image that was clicked
    captionText.innerHTML = this.alt; // Use the alt text as caption
  }
});

// Get the <span> (close button) and add its functionality
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style_display = "none";
}

// Set up the event listener to close the modal when the modal is clicked anywhere within the modal
modal.onclick = function(event) {
   if (event.target === modal || event.target === modalImg || event.target.className === "close") {
     modal.style.display = "none";
   }
}