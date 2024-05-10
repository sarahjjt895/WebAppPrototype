document.addEventListener('DOMContentLoaded', function () {
    // Initialize the chart with default data
    initializeChart();

    // Add event listener for populating the chart when Next button is clicked
    document.querySelector('.next-button').addEventListener('click', saveAndPopulate);
});

// Function to generate a unique ID based on the current date and time
function generateUniqueId() {
    const date = new Date();
    return date.getTime().toString();
}

// Function to initialize the chart
function initializeChart() {
    // Default data for initialization
    const defaultData = [
        { label: 'Distance', value: 0 },
        { label: 'Duration', value: 0 },
        { label: 'Steps', value: 0 },
        { label: 'Pace', value: 0 }
    ];

    // Chart.js configuration
    const config = {
        type: 'line',
        data: {
            labels: ['Distance', 'Duration', 'Steps', 'Pace'],
            datasets: [{
                label: 'Performance Overview',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: defaultData.map(item => item.value),
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    };

    // Create the chart
    const ctx = document.getElementById('areaChart').getContext('2d');
    new Chart(ctx, config);
}

// Function to save user input data to local storage and populate the chart
function saveAndPopulate() {
    // Retrieve data from input fields
    const distance = parseFloat(document.getElementById('distance').value);
    const duration = parseInt(document.getElementById('hours').value) * 3600 +
                     parseInt(document.getElementById('minutes').value) * 60 +
                     parseInt(document.getElementById('seconds').value);
    const steps = parseInt(document.getElementById('steps').value);
    const pace = parseFloat(document.getElementById('auto-pace').value);

    // Generate a unique ID based on the current date and time
    const uniqueId = generateUniqueId();

    // Save user input data along with the unique ID to local storage
    localStorage.setItem(uniqueId, JSON.stringify({
        distance: distance,
        duration: duration,
        steps: steps,
        pace: pace
    }));

    // Populate the chart with the user input data
    populateChart();
}

// Function to populate the chart with user-entered data
function populateChart() {
    // Retrieve the most recent user input data from local storage
    const latestId = getLatestEntryId();
    const userData = JSON.parse(localStorage.getItem(latestId));

    // Retrieve data from user input
    const distance = userData.distance;
    const duration = userData.duration;
    const steps = userData.steps;
    const pace = userData.pace;

    // Define maximum values
    const maxDistance = 15;
    const maxDuration = 1 * 3600 + 5 * 60 + 0; // Duration in seconds
    const maxSteps = 20000;
    const maxPace = 6.0;

    // Calculate percentages
    const distancePercentage = (distance / maxDistance) * 100;
    const durationPercentage = (duration / maxDuration) * 100;
    const stepsPercentage = (steps / maxSteps) * 100;
    const pacePercentage = (pace / maxPace) * 100;

    // Update the chart with user-entered data
    const chart = Chart.getChart('areaChart');
    chart.data.datasets[0].data = [distancePercentage, durationPercentage, stepsPercentage, pacePercentage];
    chart.update();
}

// Function to get the ID of the latest user input entry
function getLatestEntryId() {
    // Get all keys from local storage
    const keys = Object.keys(localStorage);
    
    // Sort keys by numerical value
    keys.sort((a, b) => b - a);

    // Return the ID of the first entry (most recent)
    return keys[0];
}
