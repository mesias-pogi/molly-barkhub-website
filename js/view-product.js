// Sample rating data (number of ratings for each star)
const ratings = {
    5: 40,
    4: 30,
    3: 20,
    2: 15,
    1: 10
};

// Calculate the total number of reviews
const totalReviews = Object.values(ratings).reduce((a, b) => a + b, 0);

// Generate the progress bars dynamically
function generateRatingBars() {
    const ratingBarsContainer = document.getElementById('ratingBars');
    ratingBarsContainer.innerHTML = ''; // Clear any existing content

    // Loop through ratings from 5 to 1
    for (let i = 5; i >= 1; i--) {
        const percentage = ((ratings[i] / totalReviews) * 100).toFixed(1); // Calculate percentage

        // Create a rating row
        const ratingRow = document.createElement('div');
        ratingRow.classList.add('rating-row');

        // Add the rating number (e.g., 5, 4, 3, etc.)
        const ratingNumber = document.createElement('div');
        ratingNumber.classList.add('rating-number');
        ratingNumber.textContent = i;

        // Create the progress bar container
        const progressContainer = document.createElement('div');
        progressContainer.classList.add('progress', 'rating-bar');
        progressContainer.style.flex = '1';

        // Create the progress bar
        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-valuemin', '0');
        progressBar.setAttribute('aria-valuemax', '100');
        progressBar.setAttribute('aria-valuenow', '0'); // Start at 0 for animation
        progressBar.style.width = '0%'; // Initial width

        // Append the progress bar to the container
        progressContainer.appendChild(progressBar);

        // Add the percentage text
        const percentageText = document.createElement('div');
        percentageText.classList.add('rating-percentage');
        percentageText.textContent = `${percentage}%`;

        // Assemble the rating row
        ratingRow.appendChild(ratingNumber);
        ratingRow.appendChild(progressContainer);
        ratingRow.appendChild(percentageText);

        // Add the row to the container
        ratingBarsContainer.appendChild(ratingRow);

        // Animate the progress bar
        setTimeout(() => {
            progressBar.style.width = `${percentage}%`;
            progressBar.setAttribute('aria-valuenow', percentage);
        }, 100);
    }
}

// Initialize the rating bars on page load
document.addEventListener('DOMContentLoaded', generateRatingBars);

// Swap Image Functionality
function swapImage(element) {
    document.getElementById("largeImage").src = element.src;
}

// Toggle button and content display logic with animation
const reviewsBtn = document.getElementById('reviewsBtn');
const addReviewBtn = document.getElementById('addReviewBtn');
const reviewsContent = document.getElementById('reviewsContent');
const addReviewContent = document.getElementById('addReviewContent');

function toggleContent(showContent, hideContent) {
    hideContent.classList.remove('active');
    setTimeout(() => {
        hideContent.style.display = 'none';
        showContent.style.display = 'block';
        setTimeout(() => showContent.classList.add('active'), 10);
    }, 500);
}

reviewsBtn.addEventListener('click', () => toggleContent(reviewsContent, addReviewContent));
addReviewBtn.addEventListener('click', () => toggleContent(addReviewContent, reviewsContent));