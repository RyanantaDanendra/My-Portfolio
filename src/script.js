
function toggleDarkMode() {
    // const current = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const html = document.querySelector('html');
    if (localStorage.theme === 'dark') {
        html.classList.remove('dark');
        localStorage.removeItem('theme');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    // root.classList.add('dark-transition');
}