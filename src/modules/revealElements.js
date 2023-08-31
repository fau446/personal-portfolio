const revealElements = () => {
  const elements = document.querySelectorAll(".left-reveal, .right-reveal");

  // initial check when page loads
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      element.classList.add("active");
    }
  });

  window.addEventListener("scroll", () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        element.classList.add("active");
      }
    });
  });
};

export default revealElements;
