
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

const projects = document.querySelectorAll('.project');
const overlays = document.querySelectorAll('.overlay');
const hrefs = [
    "https://ryanantadanendra.github.io/",
    "https://dev-ryanantaswordpress.pantheonsite.io/",
]

const madeWith = [
    "Made with HTML, CSS, and JS",
    "Made with Wordpress",
]
const a = document.createElement('a')
const p = document.createElement('p')

projects.forEach((project, i) => {
    project.addEventListener('mouseover', function() {
        overlays[i].appendChild(p);
        overlays[i].appendChild(a);
        overlays[i].style.transition = 'width 2s, height 2s';
        overlays[i].style.transitionTimingFunction = 'ease-out';

        a.textContent = "Click to see";
        a.href = hrefs[i];
        p.textContent = madeWith[i];

        // p.innerHTML = "Made with html, css, and Javascript";
        overlays[i].style.display = 'flex';
        overlays[i].style.flexDirection = 'column';
        overlays[i].style.transition = 'opacity 0.5s ease-out';

    });
    
    project.addEventListener('mouseout', function() {
        overlays[i].style.display = 'none';
    })

    
})