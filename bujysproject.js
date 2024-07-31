document.addEventListener('DOMContentLoaded', function() {
    // Sample courses data
    const courses = [
        { title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
        { title: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' },
        { title: 'Web Development with React', description: 'Build modern web applications using React.' },
        { title: 'Data Science with Python', description: 'Analyze data and build predictive models.' },
        { title: 'Machine Learning', description: 'Understand machine learning algorithms and applications.' }
    ];

    // Display courses
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
        `;
        courseList.appendChild(courseElement);
    });

    // Toggle between Home and Login sections
    document.getElementById('home-link').addEventListener('click', function() {
        document.getElementById('home-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    });

    document.getElementById('login-link').addEventListener('click', function() {
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful');
                document.getElementById('home-section').style.display = 'block';
                document.getElementById('login-section').style.display = 'none';
            } else {
                alert('Login failed');
            }
        });
    });
});