// Meridian Interactive Dashboard Operations (User Panel & Admin Panel)

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("medplus-session-user"));
  if (!currentUser) return; // Route guard is handled in auth.js

  const welcomeNameSpan = document.getElementById("dashboardWelcomeName");
  if (welcomeNameSpan) {
    welcomeNameSpan.innerText = currentUser.name;
  }

  // ==========================================
  // 1. USER DASHBOARD PANEL LOGIC
  // ==========================================
  const userRxListContainer = document.getElementById("userPrescriptionList");
  
  window.renderUserDashboard = function() {
    if (!userRxListContainer) return;

    const prescriptions = JSON.parse(localStorage.getItem("medplus-prescriptions")) || [];
    const userRx = prescriptions.filter(p => p.clientEmail.toLowerCase() === currentUser.email.toLowerCase());

    if (userRx.length === 0) {
      userRxListContainer.innerHTML = `
        <div style="text-align:center;padding:32px 0;color:var(--ink-soft);">
          <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;">YOU HAVEN'T UPLOADED ANY PRESCRIPTIONS YET.</p>
        </div>
      `;
      return;
    }

    userRxListContainer.innerHTML = userRx.map(p => `
      <div class="m-queue-item" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.9rem;">${p.id}</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:var(--ink-faint);">(${p.date})</span>
          </div>
          <p style="font-size:0.85rem;color:var(--ink-soft);margin-top:4px;">File: <span style="text-decoration:underline;">${p.fileName}</span></p>
        </div>
        <div>
          <span class="m-queue-status ${
            p.status === 'Approved, Preparing Delivery' ? 'approved' :
            p.status === 'Rejected: Invalid Prescription File' ? 'rejected' :
            'pending'
          }">
            ${p.status}
          </span>
        </div>
      </div>
    `).join("");
  };

  // ==========================================
  // 2. ADMIN DASHBOARD PANEL LOGIC
  // ==========================================
  const adminRxListContainer = document.getElementById("adminPrescriptionList");

  // Statistics counters
  const totalRxCounter = document.getElementById("statTotalRx");
  const pendingRxCounter = document.getElementById("statPendingRx");
  const approvedRxCounter = document.getElementById("statApprovedRx");

  window.renderAdminDashboard = function() {
    if (!adminRxListContainer) return;

    const prescriptions = JSON.parse(localStorage.getItem("medplus-prescriptions")) || [];

    // Calculate stats
    const total = prescriptions.length;
    const pending = prescriptions.filter(p => p.status === "Pending Review").length;
    const approved = prescriptions.filter(p => p.status === "Approved, Preparing Delivery").length;

    if (totalRxCounter) totalRxCounter.innerText = total;
    if (pendingRxCounter) pendingRxCounter.innerText = pending;
    if (approvedRxCounter) approvedRxCounter.innerText = approved;

    if (prescriptions.length === 0) {
      adminRxListContainer.innerHTML = `
        <div style="text-align:center;padding:48px 0;color:var(--ink-soft);">
          <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;">NO PRESCRIPTION REQUESTS IN QUEUE.</p>
        </div>
      `;
      return;
    }

    adminRxListContainer.innerHTML = prescriptions.map(p => `
      <div class="m-queue-item">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:12px;">
          <div>
            <span style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:0.9rem;">${p.id}</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:var(--ink-faint);margin-left:8px;">${p.date}</span>
          </div>
          <span class="m-queue-status ${
            p.status === 'Approved, Preparing Delivery' ? 'approved' :
            p.status === 'Rejected: Invalid Prescription File' ? 'rejected' :
            'pending'
          }">
            ${p.status}
          </span>
        </div>
        <div style="font-size:0.85rem;color:var(--ink-soft);line-height:1.5;margin-bottom:16px;">
          <p><strong>Patient:</strong> ${p.clientName} (${p.clientEmail})</p>
          <p><strong>Phone:</strong> ${p.clientPhone}</p>
          <p><strong>File:</strong> <span style="text-decoration:underline;">${p.fileName}</span></p>
        </div>
        <div class="m-queue-actions">
          ${p.status === "Pending Review" ? `
            <button onclick="updatePrescriptionStatus('${p.id}', 'Approved, Preparing Delivery')" class="m-btn solid" style="font-size:0.75rem;padding:6px 12px;">Approve &amp; Deliver</button>
            <button onclick="updatePrescriptionStatus('${p.id}', 'Rejected: Invalid Prescription File')" class="m-btn" style="font-size:0.75rem;padding:6px 12px;color:#c0392b;border-color:#c0392b;">Reject</button>
          ` : ''}
        </div>
      </div>
    `).join("");
  };

  window.updatePrescriptionStatus = function(rxId, nextStatus) {
    const prescriptions = JSON.parse(localStorage.getItem("medplus-prescriptions")) || [];
    const index = prescriptions.findIndex(p => p.id === rxId);
    if (index > -1) {
      prescriptions[index].status = nextStatus;
      localStorage.setItem("medplus-prescriptions", JSON.stringify(prescriptions));
      
      if (window.showNotificationModal) {
        window.showNotificationModal("Prescription Updated", `Prescription reference ${rxId} marked as ${nextStatus}.`);
      }

      window.renderAdminDashboard();
    }
  };

  // Initial invokes based on dashboard types in HTML
  if (userRxListContainer) {
    window.renderUserDashboard();
  }
  if (adminRxListContainer) {
    window.renderAdminDashboard();
  }
});
