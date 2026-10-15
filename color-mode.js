const colorModeStorageKey = 'el-blog-del-chino-color-mode';

try {
    if (localStorage.getItem(colorModeStorageKey) === 'dark') {
        document.documentElement.classList.add('dark-mode');
    }
} catch {
}

function updateColorModeButton() {
    const button = document.getElementById('color-mode-toggle');
    if (!button) return;

    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    const icon = button.querySelector('i');
    icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    button.title = isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    button.setAttribute('aria-label', button.title);
    button.setAttribute('aria-pressed', String(isDarkMode));
}

function toggleColorMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark-mode');

    try {
        localStorage.setItem(colorModeStorageKey, isDarkMode ? 'dark' : 'light');
    } catch {
    }

    updateColorModeButton();
}

document.addEventListener('DOMContentLoaded', updateColorModeButton);
