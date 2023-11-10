
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
// a.innerHTML = 'Click to see ';
// const p = document.createElement('p');
const hrefs = [
    "https://ryanantadanendra.github.io/",
    "https://dev-ryanantaswordpress.pantheonsite.io/",
]

projects.forEach((project, i) => {
    project.addEventListener('mouseover', function() {
        // overlays[i].appendChild(p);
        // overlays[i].appendChild(a);
        overlays[i].innerHTML = ''
        overlays[i].innerHTML = `
                                    <p>Made with HTML, CSS, AND JS</p>
                                    <a href=${hrefs[i]}>Click to see!</a>
                                `;
        // a.href = hrefs[i];
        // p.innerHTML = "Made with html, css, and Javascript";
        overlays[i].style.display = 'flex';
        overlays[i].style.flexDirection = 'column';
        overlays[i].style.transition = 'all 2s';
    });
    
    project.addEventListener('mouseout', function() {
        overlays[i].style.display = 'none';
    })
})