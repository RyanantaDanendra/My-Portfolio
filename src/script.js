
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

const audio = document.getElementById('audio');
// const play = document.getElementById('playButton');
let isPlaying = localStorage.getItem('isPlaying') || true;
let currentTime = localStorage.getItem('currentTime') || 0;

if(isPlaying) {
    audio.play()
    audio.currentTime = currentTime
    console.log(currentTime)
    if(document.getElementById('playButton')){
        document.getElementById('playButton').textContent = 'Pause Music';
    }
}

function audioPlay() {
    const play = document.getElementById('playButton');
    if(audio.paused) {
        audio.play()
        play.textContent = 'Pause Music'
        localStorage.setItem('isPlaying', true);
    } else {
        audio.pause();
        play.textContent = 'Play Music'
        localStorage.setItem('isPlaying', false);
    }

    localStorage.setItem('isPlaying', !audio.paused);
}

audio.addEventListener('timeupdate', function () {
    localStorage.setItem('currentTime', audio.currentTime);
    currentTime = localStorage.getItem('currentTime');
    // console.log('Waktu Pemutaran Saat Ini:', currentTime);
});

