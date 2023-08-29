/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IHJlZmVyZW5jZXMgdG8gYWxsIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgYVwiKTtcblxuLy8gQWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB3aW5kb3dcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggY29udGVudCBzZWN0aW9uXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAvLyBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzZWN0aW9uIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxuICAgIGNvbnN0IHJlY3QgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNlY3Rpb24gaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgaWYgKHJlY3QudG9wIDw9IDUwICYmIHJlY3QuYm90dG9tID49IDUwKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgbmF2aWdhdGlvbiBsaW5rc1xuICAgICAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcblxuICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBsaW5rIGFuZCBhZGQgdGhlIFwiYWN0aXZlXCIgY2xhc3NcbiAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYG5hdiBhW2hyZWY9XCIjJHtzZWN0aW9uLmlkfVwiXWAsXG4gICAgICApO1xuICAgICAgaWYgKGNvcnJlc3BvbmRpbmdMaW5rKSB7XG4gICAgICAgIGNvcnJlc3BvbmRpbmdMaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9