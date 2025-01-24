// Initialize state
let config = null;
let activeTab = "quick";
let selectedPersonality = "minimalist";

// Initialize the page
async function initializePage() {
  try {
    const response = await fetch("assets/config.json");
    config = await response.json();
    populateFeatures();
    initializePersonalities();
    initializeTools();
    setupEventListeners();
  } catch (error) {
    console.error("Error loading configuration:", error);
  }
}

// Populate features section
function populateFeatures() {
  const featuresContainer = document.querySelector("[data-features-container]");
  const features = config.personalities
    .slice(0, 3)
    .map(
      (p) => `
        <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-indigo-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
                <h3 class="font-medium">${p.name}</h3>
                <p class="text-gray-600">${p.tools.join(", ")}</p>
            </div>
        </div>
    `
    )
    .join("");
  featuresContainer.innerHTML = features;
}

// Initialize personalities section
function initializePersonalities() {
  const container = document.querySelector("[data-personalities-container]");
  const personalitiesHtml =
    config.personalities
      .map(
        (p) => `
        <label class="flex items-center space-x-2">
            <input type="radio" name="personality" value="${p.id}" 
                   ${p.id === selectedPersonality ? "checked" : ""} 
                   class="text-indigo-600">
            <span>${p.name}</span>
        </label>
    `
      )
      .join("") +
    `
        <label class="flex items-center space-x-2">
            <input type="radio" name="personality" value="custom" class="text-indigo-600">
            <span>Custom</span>
        </label>
    `;
  container.innerHTML = personalitiesHtml;
}

// Initialize tools section
function initializeTools() {
  const container = document.querySelector("[data-tools-container]");
  const toolsHtml = config.tools
    .map(
      (tool) => `
        <label class="flex items-center space-x-2">
            <input type="checkbox" class="text-indigo-600" 
                   id="${tool.id}" data-tool>
            <span>${tool.name}</span>
        </label>
    `
    )
    .join("");
  container.innerHTML = toolsHtml;
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  // Personality selection
  document.querySelectorAll('input[name="personality"]').forEach((radio) => {
    radio.addEventListener("change", handlePersonalityChange);
  });

  // Tool selection
  document.querySelectorAll("[data-tool]").forEach((checkbox) => {
    checkbox.addEventListener("change", updateCustomCommand);
  });
}

// Switch between quick and custom tabs
function switchTab(tab) {
  const quickTab = document.querySelector('[data-tab="quick"]');
  const customTab = document.querySelector('[data-tab="custom"]');
  const quickInstall = document.getElementById("quick-install");
  const customBuilder = document.getElementById("custom-builder");

  activeTab = tab;
  if (tab === "quick") {
    quickTab.classList.remove("bg-gray-200", "text-gray-700");
    quickTab.classList.add("bg-indigo-500", "text-white");
    customTab.classList.remove("bg-indigo-500", "text-white");
    customTab.classList.add("bg-gray-200", "text-gray-700");
    quickInstall.classList.remove("hidden");
    customBuilder.classList.add("hidden");
  } else {
    customTab.classList.remove("bg-gray-200", "text-gray-700");
    customTab.classList.add("bg-indigo-500", "text-white");
    quickTab.classList.remove("bg-indigo-500", "text-white");
    quickTab.classList.add("bg-gray-200", "text-gray-700");
    quickInstall.classList.add("hidden");
    customBuilder.classList.remove("hidden");
  }
}

// Handle personality selection changes
function handlePersonalityChange(event) {
  selectedPersonality = event.target.value;
  const customTools = document.getElementById("custom-tools");
  customTools.style.display =
    selectedPersonality === "custom" ? "block" : "none";
  updateInstallCommand();
}

// Update the installation command
function updateInstallCommand() {
  const commandElement = document.getElementById(
    activeTab === "quick" ? "quick-install-command" : "custom-command"
  );
  if (selectedPersonality === "custom") {
    const selectedTools = Array.from(
      document.querySelectorAll("[data-tool]:checked")
    )
      .map((cb) => cb.id)
      .join(",");
    commandElement.textContent = `wget -qO- https://x.org/install?tools=${selectedTools} | bash`;
  } else {
    commandElement.textContent = `wget -qO- https://x.org/install?personality=${selectedPersonality} | bash`;
  }
}

// Copy command to clipboard
function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      element.classList.add("text-green-600");
      setTimeout(() => {
        element.classList.remove("text-green-600");
      }, 300);
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage);

// FAQ toggle
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const arrow = button.querySelector("svg");
  content.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
}
