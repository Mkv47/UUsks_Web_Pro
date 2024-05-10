const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');
const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
const dashboardContent = document.getElementById('tab-cont');
const element1 = document.querySelector('.cs');
const element2 = document.querySelector('.log-in');
const passwordInput = document.getElementById('password');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

console.log(fetch('https://clubs-system.onrender.com/api/event/'))
function loadDashboardContent() {
    fetch('dashboard.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            dashboardContent.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem fetching the dashboard content:', error);
        });
}

function loadClubsContent() {
    fetch('clubs.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            dashboardContent.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem fetching the dashboard content:', error);
        });
}

function changeLogin() {
    element1.style.display = 'none';
    element2.style.display = 'contents';
}

function back() {
    element1.style.display = 'contents';
    element2.style.display = 'none';
}
function goTo(p) {
    window.location.href = p;
}

function togPass() {
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
    }else{
        passwordInput.type = 'password';
    }
}

function procCard(items) {
    const containerC = document.getElementById('ctc')
    const item = document.querySelector(items + ' img')
    const insideItems = document.getElementById('inItems')
    const imgElement = inItems.querySelector('img');
    containerC.style.display = 'none';
    insideItems.style.display = 'flex';
    imgElement.src = item.src;
}

function procClub(items) {
    const containeri = document.getElementById('cti')
    const item = document.querySelector(items + ' img')
    const insideClubs = document.getElementById('inClubs')
    const imgElement = inClubs.querySelector('img');
    containeri.style.display = 'none';
    insideClubs.style.display = 'flex';
    imgElement.src = item.src;
}

function loadActivitiesContent() {
    fetch('activities.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            dashboardContent.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem fetching the dashboard content:', error);
        });
}

function unload() {
    dashboardContent.innerHTML = "<main></main>";
}


menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    }
});