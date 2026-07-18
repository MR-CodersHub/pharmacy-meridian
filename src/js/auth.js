// MedPlus User Authentication and Access Control System

function initAuth() {
  const rootPath = document.querySelector('meta[name="root-path"]')?.getAttribute('content') || './';

  // Seed default admin and user if not already in localStorage
  let users = JSON.parse(localStorage.getItem("medplus-users")) || [];
  if (users.length === 0) {
    users = [
      { name: "Pharmacy Admin", email: "admin@medplus.com", password: "admin123", role: "admin" },
      { name: "John Doe", email: "user@medplus.com", password: "user123", role: "user" }
    ];
    localStorage.setItem("medplus-users", JSON.stringify(users));
  }

  // Handle Login Flow
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      // Bypass credential checks and dynamically generate a session user
      const matchedUser = users.find(u => u.email.toLowerCase() === email.toLowerCase()) || {
        name: email.split("@")[0],
        email: email,
        password: password,
        role: email.toLowerCase().includes("admin") ? "admin" : "user"
      };

      // Set session
      localStorage.setItem("medplus-session-user", JSON.stringify(matchedUser));
      
      // Show success alert in navbar.js
      if (window.showNotificationModal) {
        window.showNotificationModal("Access Granted", `Welcome back, ${matchedUser.name}! Redirecting to homepage...`);
      } else {
        alert(`Welcome back, ${matchedUser.name}!`);
      }

      setTimeout(() => {
        window.location.href = `${rootPath}index.html`;
      }, 1500);
    });
  }

  // Handle Signup Flow
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;
      const role = document.getElementById("signupRole").value;

      // Add user
      const newUser = { name, email, password, role };
      users.push(newUser);
      localStorage.setItem("medplus-users", JSON.stringify(users));

      // Auto login after signup
      localStorage.setItem("medplus-session-user", JSON.stringify(newUser));

      if (window.showNotificationModal) {
        window.showNotificationModal("Account Created", `Registration successful, ${name}! Redirecting to homepage...`);
      } else {
        alert("Registration successful!");
      }

      setTimeout(() => {
        window.location.href = `${rootPath}index.html`;
      }, 1500);
    });
  }

  // Check Dashboard Route Security (Bypassed)
  const isDashboardPage = window.location.pathname.includes("/auth/");
  if (isDashboardPage) {
    // Authentication security check removed as requested
    console.log("Authentication checks bypassed for dashboard page.");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAuth);
} else {
  initAuth();
}
