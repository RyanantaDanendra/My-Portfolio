
function toggleDarkMode() {
    const current = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    const body = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
        body.remove('dark');
        localStorage.removeItem('theme');
    } else {
        body.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    root.classList.add('dark-transition');
}