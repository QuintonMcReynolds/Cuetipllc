// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Weater api
  const apiKey = "581b2781ae13680d56d1b2a0c370a2b8";
  const city = "Fairfax";

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Fairfax&appid=581b2781ae13680d56d1b2a0c370a2b8&units=imperial`
    )
    .then((response) => {
      const data = response.data;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const cityName = data.name;

      document.getElementById(
        "weatherInfo"
      ).innerText = `${temp}°F, ${description} in ${cityName}`;
    })
    .catch((error) => {
      console.error("Weather API Error:", error);
      document.getElementById("weatherInfo").innerText =
        "Unable to load weather data.";
    });

  // Carousel functionality
  const carousel = document.querySelector("#carouselExampleIndicators");
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 3000,
      wrap: true,
    });
  }

  // Form submission (if you add a form later)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
    });
  }
});
