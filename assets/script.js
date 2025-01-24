// Load and initialize configuration
async function initializeConfig() {
  try {
    const response = await fetch("assets/config.json");
    const config = await response.json();
    initializePersonalities(config.personalities);
    initializeTools(config.tools);
    addEventListeners();
  } catch (error) {
    console.error("Error loading config:", error);
  }
}

function initializePersonalities(personalities) {
  const container = document.querySelector("[data-personalities-container]");
  const personalitiesHTML = personalities
    .map(
      (p) => `
    <label class="flex items-center space-x-2">
      <input type="radio" name="personality" value="${p.id}" class="text-indigo-600">
      <span>${p.name}</span>
    </label>
  `
    )
    .join("");

  container.innerHTML =
    personalitiesHTML +
    `
    <label class="flex items-center space-x-2">
      <input type="radio" name="personality" value="custom" class="text-indigo-600">
      <span>Custom</span>
    </label>`;
}

function initializeTools(tools) {
  const container = document.querySelector("[data-tools-container]");
  container.innerHTML = tools
    .map(
      (tool) => `
    <label class="flex items-center space-x-2">
      <input type="checkbox" class="text-indigo-600" id="${tool.id}" data-tool>
      <span>${tool.name}</span>
    </label>
  `
    )
    .join("");
}

function addEventListeners() {
  // Personality selection
  document.querySelectorAll('input[name="personality"]').forEach((radio) => {
    radio.addEventListener("change", handlePersonalityChange);
  });

  // Tool selection
  document.querySelectorAll("[data-tool]").forEach((checkbox) => {
    checkbox.addEventListener("change", updateCustomCommand);
  });
}

function handlePersonalityChange(event) {
  const customTools = document.getElementById("custom-tools");
  const isCustom = event.target.value === "custom";

  customTools.style.display = isCustom ? "block" : "none";
  updateInstallCommand(event.target.value);
}

function updateInstallCommand(personality) {
  const commandElement = document.getElementById("install-command");
  if (personality === "custom") {
    const selectedTools = Array.from(
      document.querySelectorAll("[data-tool]:checked")
    )
      .map((cb) => cb.id)
      .join(",");
    commandElement.textContent = `wget -qO- https://x.org/install?tools=${selectedTools} | bash`;
  } else {
    commandElement.textContent = `wget -qO- https://x.org/install?personality=${personality} | bash`;
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initializeConfig);
