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
          <p>Ready to book your event with us? We offer a variety of packages for every occasion. Whether it’s a wedding, corporate event, or birthday celebration, we’ve got you covered!</p>
          <p>Fill out the form below to get started!</p>
          <!-- Sample form -->
          <form>
            <label for="eventType">Event Type:</label>
            <select id="eventType" name="eventType">
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="birthday">Birthday Party</option>
            </select>
            <br><br>
            <label for="eventDate">Event Date:</label>
            <input type="date" id="eventDate" name="eventDate" required>
            <br><br>
            <input type="submit" value="Submit">
          </form>
        </section>`;
      break;
    case "contact":
      content = `
        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to inquire about booking an event, feel free to contact us!</p>
          <p>Email: info@mahalakshmievents.com</p>
          <p>Phone: +1 234 567 890</p>
          <form>
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required>
            <br><br>
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            <label for="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>
            <br><br>
            <input type="submit" value="Send Message">
          </form>
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
