function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Optional: Close sidebar on clicking a link (for mobile experience)
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("active");
  });
});

// Open the sidebar if you refresh the page and it was previously opened
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const currentPage = window.location.pathname.split("/").pop(); // Get current page name
  const links = document.querySelectorAll("#sidebar a");

  // If the current page is one of the links in the sidebar, keep it open
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      sidebar.classList.add("active");
    }
  });
});
