// Sidebar toggle function for mobile (opens and closes sidebar)
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Event listener for sidebar links to change content dynamically
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior (which would normally reload the page)
    const page = link.getAttribute("data-page"); // Get the page name from the data attribute
    loadPage(page); // Load the corresponding page content dynamically
  });
});

// Function to load the page content dynamically based on the link clicked
function loadPage(page) {
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

  // Update the main content area with the new content
  document.getElementById("content").innerHTML = content;
}

// Add event listener to the hamburger icon (three lines)
document.getElementById("menuToggle").addEventListener("click", toggleSidebar);

// Optionally: Load the default page (home) when the app loads
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});
