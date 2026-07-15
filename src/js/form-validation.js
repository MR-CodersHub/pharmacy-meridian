// Meridian Interactive Form Validation and Alerts System

document.addEventListener("DOMContentLoaded", () => {
  // 1. Email Format Validator Helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // 2. Clear Visual Error States
  function setError(inputElement, errorMessage) {
    inputElement.style.borderColor = "#c0392b";
    
    let errorLabel = inputElement.parentElement.querySelector(".input-error-label");
    if (!errorLabel) {
      errorLabel = document.createElement("p");
      errorLabel.className = "input-error-label";
      errorLabel.style.color = "#c0392b";
      errorLabel.style.fontSize = "0.7rem";
      errorLabel.style.marginTop = "4px";
      errorLabel.style.fontFamily = "'JetBrains Mono', monospace";
      inputElement.parentElement.appendChild(errorLabel);
    }
    errorLabel.innerText = errorMessage;
  }

  function clearError(inputElement) {
    inputElement.style.borderColor = "";
    
    const errorLabel = inputElement.parentElement.querySelector(".input-error-label");
    if (errorLabel) {
      errorLabel.remove();
    }
  }

  // 3. Contact Form Submission Validator
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById("contactName");
      const emailInput = document.getElementById("contactEmail");
      const phoneInput = document.getElementById("contactPhone");
      const subjectInput = document.getElementById("contactSubject");
      const messageInput = document.getElementById("contactMessage");

      let hasErrors = false;

      // Validate Name
      if (nameInput.value.trim().length < 2) {
        setError(nameInput, "Full name must be at least 2 characters long.");
        hasErrors = true;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, "Please enter a valid email address.");
        hasErrors = true;
      } else {
        clearError(emailInput);
      }

      // Validate Phone (optional but must be numbers if entered)
      if (phoneInput.value.trim() !== "" && !/^\+?[0-9\s\-]{7,15}$/.test(phoneInput.value.trim())) {
        setError(phoneInput, "Please enter a valid phone number (7-15 digits).");
        hasErrors = true;
      } else {
        clearError(phoneInput);
      }

      // Validate Message
      if (messageInput.value.trim().length < 10) {
        setError(messageInput, "Message must contain at least 10 characters.");
        hasErrors = true;
      } else {
        clearError(messageInput);
      }

      if (!hasErrors) {
        const userEmail = emailInput.value.trim();
        contactForm.reset();

        if (window.showNotificationModal) {
          window.showNotificationModal(
            "Message Sent!",
            `Thank you for contacting Meridian support. A confirmation email has been dispatched to ${userEmail}. We usually respond within 4 hours.`
          );
        } else {
          alert("Your support request was submitted successfully.");
        }
      }
    });

    // Inline field validation triggers on focusout/input
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("focusout", () => {
        if (input.value.trim() !== "") {
          clearError(input);
        }
      });
    });
  }

  // 4. Prescription Upload Form Simulator
  const rxUploadForm = document.getElementById("prescriptionForm");
  const fileDropZone = document.getElementById("rxFileDropZone");
  const fileInput = document.getElementById("rxFileInput");
  const fileNameDisplay = document.getElementById("rxFileName");

  if (fileDropZone && fileInput) {
    // Click triggers file selector
    fileDropZone.addEventListener("click", () => fileInput.click());

    // Highlight border on drag over
    fileDropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      fileDropZone.style.borderColor = "var(--accent)";
      fileDropZone.style.background = "rgba(43,92,79,0.05)";
    });

    fileDropZone.addEventListener("dragleave", () => {
      fileDropZone.style.borderColor = "";
      fileDropZone.style.background = "";
    });

    fileDropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      fileDropZone.style.borderColor = "";
      fileDropZone.style.background = "";
      
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        handleFileSelection();
      }
    });

    fileInput.addEventListener("change", handleFileSelection);

    function handleFileSelection() {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (fileNameDisplay) {
          fileNameDisplay.innerText = `Selected File: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
          fileNameDisplay.style.color = "var(--accent)";
          fileNameDisplay.style.fontWeight = "600";
        }
        fileDropZone.style.background = "rgba(43,92,79,0.03)";
        fileDropZone.style.borderColor = "var(--accent)";
      }
    }
  }

  if (rxUploadForm) {
    rxUploadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const rxName = document.getElementById("rxName");
      const rxEmail = document.getElementById("rxEmail");
      const rxPhone = document.getElementById("rxPhone");

      let hasErrors = false;

      // Validate Name
      if (rxName.value.trim().length < 2) {
        setError(rxName, "Full name is required.");
        hasErrors = true;
      } else {
        clearError(rxName);
      }

      // Validate Email
      if (!isValidEmail(rxEmail.value.trim())) {
        setError(rxEmail, "Please enter a valid email address.");
        hasErrors = true;
      } else {
        clearError(rxEmail);
      }

      // Validate Phone
      if (!/^\+?[0-9\s\-]{7,15}$/.test(rxPhone.value.trim())) {
        setError(rxPhone, "A valid contact number is required.");
        hasErrors = true;
      } else {
        clearError(rxPhone);
      }

      // Validate File upload
      if (!fileInput || fileInput.files.length === 0) {
        alert("Please upload or drag & drop your prescription file (Image or PDF).");
        hasErrors = true;
      }

      if (!hasErrors) {
        const file = fileInput.files[0];
        const clientEmail = rxEmail.value.trim();
        const clientName = rxName.value.trim();

        // Simulate upload file to user's storage session
        const prescriptionRecords = JSON.parse(localStorage.getItem("medplus-prescriptions")) || [];
        prescriptionRecords.push({
          id: "RX-" + Math.floor(Math.random() * 900000 + 100000),
          clientName,
          clientEmail,
          clientPhone: rxPhone.value.trim(),
          fileName: file.name,
          date: new Date().toLocaleDateString(),
          status: "Pending Review"
        });
        localStorage.setItem("medplus-prescriptions", JSON.stringify(prescriptionRecords));

        rxUploadForm.reset();
        if (fileNameDisplay) {
          fileNameDisplay.innerText = "No file chosen";
          fileNameDisplay.style.color = "";
          fileNameDisplay.style.fontWeight = "";
        }
        if (fileDropZone) {
          fileDropZone.style.background = "";
          fileDropZone.style.borderColor = "";
        }

        if (window.showNotificationModal) {
          window.showNotificationModal(
            "Prescription Received!",
            `Thank you, ${clientName}. Your prescription has been uploaded successfully. A pharmacist will review your file and contact you at ${clientEmail} to confirm your order details.`
          );
        } else {
          alert("Prescription uploaded successfully.");
        }

        // Re-render dashboard list dynamically
        if (window.renderUserDashboard) {
          window.renderUserDashboard();
        }
      }
    });
  }
});
