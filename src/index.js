// Get references to all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Iterate through each content section
  document.querySelectorAll("section").forEach((section) => {
    // Get the position of the section relative to the viewport
    const rect = section.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top <= 50 && rect.bottom >= 50) {
      // Remove the "active" class from all navigation links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Find the corresponding link and add the "active" class
      const correspondingLink = document.querySelector(
        `nav a[href="#${section.id}"]`,
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
});
