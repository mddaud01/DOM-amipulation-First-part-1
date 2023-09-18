let heading= document.getElementById('title')

heading.style.background='red'
heading.addEventListener('mouseover', () => {
    heading.style.backgroundColor = 'blue';
  });
  heading.addEventListener('mouseout', () => {
    heading.style.backgroundColor = 'black';
  });


//   navigation bar js

const navItems = document.querySelectorAll('.nav li');
        
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});

//   dropdown in js 
   // Get references to the button and dropdown
   const toggleButton = document.getElementById("toggleButton");
   const menu = document.getElementById("menu");

   // Add click event listener to the button
   toggleButton.addEventListener("click", function() {
       // Toggle the display property of the dropdown
       if (menu.style.display === "block") {
           menu.style.display = "none"; // Close the dropdown
       } else {
           menu.style.display = "block"; // Open the dropdown
           menu.style.transition='all 3s'
       }
   });

//    crousal in js

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

// Show the first item initially
showItem(currentIndex);

// FAQs js in dom manipulation 

// function toggleFAQ(number) {
//     const faq = document.getElementById(`faq${number}`);
//     if (faq.style.display === 'block') {
//         faq.style.display = 'none';
//     } else {
//         faq.style.display = 'block';
//     }
// }
let openFAQ = null;

function toggleFAQ(number) {
    const faq = document.getElementById(`faq${number}`);
    
    if (faq === openFAQ) {
        faq.style.display = (faq.style.display === 'block') ? 'none' : 'block';
    } else {
        if (openFAQ !== null) {
            openFAQ.style.display = 'none';
        }
        faq.style.display = 'block';
        openFAQ = faq;
    }
}

// overlay modal js

const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const fullscreenButton = document.getElementById("fullscreenButton");
const modalOverlay = document.getElementById("modalOverlay");

openModalButton.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

fullscreenButton.addEventListener("click", () => {
    modalOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
});

// JavaScript to show/hide the skeleton modal as needed 

 // Simulate an asynchronous operation (e.g., fetching data)
        // Replace this with your actual asynchronous operation logic
        function simulateAsyncOperation() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000); // Simulate a 3-second delay
            });
        }
 // Show the skeleton modal when needed (e.g., when fetching data)
 function showSkeletonModal() {
    const skeletonModal = document.getElementById("skeletonModal");
    skeletonModal.style.display = "flex";
}

// Hide the skeleton modal when the asynchronous operation is complete
async function hideSkeletonModal() {
    const skeletonModal = document.getElementById("skeletonModal");
    await simulateAsyncOperation(); // Simulate the asynchronous operation
    skeletonModal.style.display = "none";
}

// Example: Trigger the show/hide of the skeleton modal
// You can customize this based on your website's logic
showSkeletonModal(); // Show skeleton modal when needed
hideSkeletonModal(); // Hide skeleton modal when the operation is complete


// rating section ork from here 
const stars = document.querySelectorAll('.star');
const progressBar = document.getElementById('progressBar');
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        currentRating = rating;
        star.classList.toggle('abc')

        updateProgressBar(rating);
    });
});

function updateProgressBar(rating) {
    const percentage = (rating / 5) * 100;
    progressBar.style.width = percentage + '%';
}
