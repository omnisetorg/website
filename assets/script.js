// Copy to clipboard functionality
function copyToClipboard(element) {
  const text = element.textContent;
  navigator.clipboard.writeText(text).then(() => {
    element.classList.add('bg-green-500', 'text-white');
    element.textContent = 'Copied!';
    setTimeout(() => {
      element.classList.remove('bg-green-500', 'text-white');
      element.textContent = text;
    }, 2000);
  });
}

// Mobile menu toggle with ARIA support
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
});