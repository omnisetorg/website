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