function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Add event listener to the hamburger button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menuToggle").addEventListener("click", toggleSidebar);

  // Optional: Close sidebar on clicking a link
  document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
    });
  });
});
