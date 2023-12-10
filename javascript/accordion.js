document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      const accordionH5 = this.querySelector("h5");
      const accordionIcon = this.querySelector("i");

      // Menutup semua accordion yang terbuka
      accordionHeaders.forEach(function (accHeader) {
        if (accHeader !== header) {
          accHeader.classList.remove("active");
          const accordionContent = accHeader.nextElementSibling;
          accordionContent.style.maxHeight = 0;
          const accH5 = accHeader.querySelector("h5");
          const accIcon = accHeader.querySelector("i");
          if (accH5) {
            accH5.classList.remove("active");
          }
          if (accIcon) {
            accIcon.classList.remove("active");
          }
        }
      });

      this.classList.toggle("active");
      const accordionContent = this.nextElementSibling;
      if (isActive) {
        accordionContent.style.maxHeight = 0;
        accordionH5.classList.remove("active");
        accordionIcon.classList.remove("active");
      } else {
        accordionContent.style.maxHeight =
          "1000px"; /* Nilai maksimum ketinggian yang sesuai */
        accordionH5.classList.add("active");
        accordionIcon.classList.add("active");
      }
    });
  });
});
