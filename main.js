const setVhVariable = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
}

setVhVariable();

window.addEventListener('resize', setVhVariable);

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }

    document.addEventListener('click', (e) => {
        if (dropdownContent && !dropdownBtn.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // --- CODE FOR SHRINKING HEADER ---
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 50) {
        // If at the top, remove the scrolled class
        body.classList.remove("scrolled");
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains("scrolled")) {
        // Add scrolled class when scrolling down past the threshold
        body.classList.add("scrolled");
      }
      
      // Optional: If you want the header to grow back when scrolling up
      // but not at the very top, you can add this else-if block.
      // else if (currentScroll < lastScroll && body.classList.contains("scrolled")) {
      //   body.classList.remove("scrolled");
      // }

      lastScroll = currentScroll;
    });
});