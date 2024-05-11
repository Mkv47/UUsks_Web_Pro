const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');
const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
const activitiesID = document.getElementById('activities');
const dashboardContent = document.getElementById('tab-cont');
const element1 = document.querySelector('.cs');
const element2 = document.querySelector('.log-in');
const passwordInput = document.getElementById('password');
const redText = document.querySelector('.log-in .spef .cont .bottom-elements .wrong')

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

function goToSideLink() {
    sideLinks.forEach(i => {
        
        i.parentElement.classList.remove('active');
    })
    activitiesID.classList.add('active')
}

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
const getUsers = async () => {
    try {
    const response = await fetch('https://clubs-system.onrender.com/api/user/');
    const data = await response.json();

    // Assuming data is an array of user objects
    data.forEach((user) => {
        console.log(user); // Log each user object
        // Optionally, display each user's data in your frontend
        // For example, create a <div> for each user and append it to a container
        const userDiv = document.createElement('div');
        userDiv.textContent = `User ID: ${user._id}, Name: ${user.user_name}, Email: ${user.user_email}`;
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

// Function to handle user signup
const signUpUser = async (userData) => {
    try {
      const response = await fetch('https://clubs-system.onrender.com/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
};
  
  // Function to handle user login
  const loginUser = async (loginData) => {
    try {
        const response = await fetch('https://clubs-system.onrender.com/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify(loginData),
        });
        if (response.ok) {
            goTo();
            const data = await response.json();
            console.log(data);
        }else{
            redText.style.display = 'contents';
        }
    }catch (error) {
        console.error('Error:', error);
    }
};

// Example usage
const signUpData = {
    user_img: 'images/yapay-zeka-kulubu 1.png',
    user_name: 'Admin',
    user_email: 'admin@example.com',
    user_password: 'password123',
    user_birth: '1995',
};
function check(){
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;
    const loginData = {
        user_email: userEmail,
        user_password: userPassword,
    };
    console.log(loginData);
    loginUser(loginData)
}

function changeLogin() {
    element1.style.display = 'none';
    element2.style.display = 'contents';
}

function back() {
    element1.style.display = 'contents';
    element2.style.display = 'none';
}

function logOut(){
    window.location.href = 'Login.html';
}

function goTo() {
    window.location.href = 'index.html';
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