// Sample data, replace with Firebase data retrieval
const internships = [
  { title: 'Web Developer Internship', company: 'Tech Inc.', location: 'Remote', duration: '3 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },

  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },
  { title: 'Marketing Internship', company: 'Marketing Co.', location: 'New York', duration: '6 months' },


  // Add more internship data here
];

function displayInternships() {
  const internshipList = document.getElementById('internship-list');

  internships.forEach((internship, index) => {
      const card = document.createElement('div');
      card.className = 'internship-card';

      card.innerHTML = `
          <h2>${internship.title}</h2>
          <p><strong>Company:</strong> ${internship.company}</p>
          <p><strong>Location:</strong> ${internship.location}</p>
          <p><strong>Duration:</strong> ${internship.duration}</p>
      `;

      // Add a click event listener to the card
      card.addEventListener('click', () => {
          // Redirect to the apply page (for now, it's a dummy URL)
          window.location.href = `google.com`;
      });

      internshipList.appendChild(card);
  });
}

displayInternships();



