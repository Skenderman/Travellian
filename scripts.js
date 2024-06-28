document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar-mobile");
  const logoHeader = document.querySelector("#logo-header");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    logoHeader.classList.toggle("active");
  });
  new Splide("#hero-places-showcase", {
    autoHeight: true,
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    paginationDirection: "ttb",
  }).mount(window.splide.Extensions);
  new Splide("#landmark-showcase", {
    type: "loop",
    gap: "1rem",
    wheel: true,
    autoWidth: true,
    lazyLoad: "nearby",
    classes: {
      prev: "splide__arrow--prev left-arrow",
      next: "splide__arrow--next right-arrow",
    },
  }).mount();
  new Splide("#special-offers", {
    gap: "1rem",
    type: "loop",
    wheel: true,
    autoWidth: true,
    classes: {
      prev: "splide__arrow--prev left-arrow",
      next: "splide__arrow--next right-arrow",
    },
  }).mount(window.splide.Extensions);
  new Splide("#trip-planners", {
    gap: "1rem",
    type: "loop",
    autoWidth: true,
    drag: "free",
    snap: true,
    wheel: true,
    lazyLoad: "nearby",
  }).mount(window.splide.Extensions);
  new Splide("#gallery", {
    gap: "1.5rem",
    type: "loop",
    autoWidth: true,
    drag: "free",
    snap: true,
    wheel: true,
    lazyLoad: "nearby",

    classes: {
      prev: "splide__arrow--prev left-arrow",
      next: "splide__arrow--next right-arrow",
    },
  }).mount(window.splide.Extensions);

  new Splide("#client-reviews", {
    gap: "2rem",
    type: "loop",
    autoWidth: true,
    drag: "free",
    snap: true,
    wheel: true,
    lazyLoad: "nearby",
    breakpoints: {
      450: {
        direction: "ttb",
        height: "350px",
        // width: "auto",
        perPage: 1,
      },
    },
    classes: {
      prev: "splide__arrow--prev left-arrow",
      next: "splide__arrow--next right-arrow",
    },
  }).mount(window.splide.Extensions);
  // DATE PICKER

  const checkinInput = document.getElementById("checkin");
  const checkoutInput = document.getElementById("checkout");
  // Function to format date as YYYY-MM-DD
  function formatDate(date) {
    const d = new Date(date);
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // Set the minimum date for check-in to today
  const today = new Date();
  checkinInput.min = formatDate(today);

  // Event listener for check-in date change
  checkinInput.addEventListener("change", function () {
    const checkinDate = new Date(checkinInput.value);
    const minCheckoutDate = new Date(checkinDate);
    minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);

    // Set the minimum check-out date to the day after check-in
    checkoutInput.min = formatDate(minCheckoutDate);

    // If the current check-out date is before the new minimum, update it
    if (new Date(checkoutInput.value) <= checkinDate) {
      checkoutInput.value = formatDate(minCheckoutDate);
    }
  });
});
