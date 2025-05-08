// Sidebar toggle function for mobile
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Event listener for sidebar links
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior (page reload)
    const page = link.getAttribute("data-page"); // Get the page name from the data attribute
    loadPage(page); // Load the content of that page
  });
});

// Function to load the page content dynamically
function loadPage(page) {
  // Example content for each page (You can load real HTML or content here)
  let content = "";

  switch (page) {
    case "home":
      content = `
        <section class="hero">
          <h2>Welcome to Mahalakshmi Elite Events</h2>
          <p>Where dreams become unforgettable memories.</p>
        </section>`;
      break;
    case "about":
      content = `
        <section>
          <h2>About Us</h2>
          <p>We are a premier events company focused on making your special moments unforgettable.</p>
        </section>`;
      break;
    case "gallery":
      content = `
        <section>
          <h2>Gallery</h2>
          <p>Check out our recent events and celebrations!</p>
        </section>`;
      break;
    case "book":
      content = `
        <section>
          <h2>Book Your Event</h2>
          <p>Ready to book your event with us? Click below to start!</p>
        </section>`;
      break;
    case "contact":
      content = `
        <section>
          <h2>Contact Us</h2>
          <p>Get in touch with us for event inquiries!</p>
        </section>`;
      break;
    default:
      content = `
        <section class="hero">
          <h2>Welcome to Mahalakshmi Elite Events</h2>
          <p>Where dreams become unforgettable memories.</p>
        </section>`;
      break;
  }

  // Insert the content into the main content area
  document.getElementById("content").innerHTML = content;
}

// Optionally: Load the default page (home) when the app loads
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});
