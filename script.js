// Save data to Local Storage
localStorage.setItem('key', 'value');

// Retrieve data from Local Storage
const data = localStorage.getItem('key');

const performanceBreakdown = document.getElementById('performanceBreakdown');

//function for the option (day, week month) button to change when pressed
const optionBtns = document.querySelectorAll('.option-btn');
optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        optionBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
    });
});

// function for the plus button to open the overlay when pressed
document.addEventListener('DOMContentLoaded', function () {
    const plusButton = document.getElementById('plus-button');
    plusButton.addEventListener('click', openOverlay);
});

function openOverlay() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => overlay.classList.remove('show')); // Close any open overlay
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show'); // Add the 'show' class
}

// buttons for manual/ import in the overlay
const manualBtn = document.getElementById('manual-btn');
const importBtn = document.getElementById('import-btn');

// Add event listeners to the buttons
manualBtn.addEventListener('click', toggleButtonBold);
importBtn.addEventListener('click', toggleButtonBold);

// Function to toggle the active class on the clicked button
function toggleButtonBold(event) {
    const button = event.target;

    // Remove 'active' class from all buttons
    const allButtons = document.querySelectorAll('.overlay-button');
    allButtons.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });

    // Toggle 'active' class on the clicked button
    button.classList.toggle('active');
}

// variables
const inputs = document.querySelectorAll("input");
const error = document.querySelector("#error");

// Function to check if the input is for duration (hours, minutes, or seconds)
function isDurationInput(input) {
    return input.id === 'hours' || input.id === 'minutes' || input.id === 'seconds';
}

// functions for the duration input field
const validInput = (val) => {
    // prevent user from inserting non-digits
    return val.replace(/[^0-9]+/g, "");
};

const setMax = (input) => {
    let id = input.getAttribute("id"),
        max = 0;
    switch (id) {
        case "hours":
            max = 23;
            break;
        default:
            max = 60;
    }
    return max;
};

const throwErr = (mssg, input, invalid = false) => {
    const error = document.querySelector("#error"); // Get the error message element
    if (invalid === true) {
        input.classList.add("invalid");
        error.style.visibility = "visible"; // Show the error message
        error.innerHTML = `<small>${mssg}</small>`;
    } else {
        input.classList.remove("invalid");
        error.style.visibility = "hidden"; // Hide the error message
        // error.innerHTML = "";
    }
};

// actions
inputs.forEach((input) => {
    let max = setMax(input),
        isInvalid = false,
        mssg;

    input.addEventListener("focus", (e) => {
        // Blank input on default values
        if (e.target.value === "0" || e.target.value === "00") {
            e.target.value = "";
        }

        // Show error mssg for invalid inputs when not corrected
        if (isDurationInput(e.target) && e.target.classList.contains('invalid')) {
            isInvalid = true;
            throwErr(mssg, input, isInvalid);
        } else {
            isInvalid = false;
            throwErr(mssg, input);
        }
    });

    input.addEventListener("keyup", (e) => {
        let val = e.target.value;

        // only allow digits
        input.value = validInput(val);

        // Check if the input is for duration
        if (isDurationInput(input)) {
            // restrict input characters
            if (val.length > 2) {
                input.value = val.substring(0, 2);
            }
        }

        // set max value allowed
        if (isDurationInput(input) && +input.value > max) {
            // handle error
            isInvalid = true;
            mssg = `It can't be more than ${max} ${input.getAttribute(
                "id"
            )}! Try again.`;

            throwErr(mssg, input, isInvalid);
        } else {
            isInvalid = false;
            throwErr(mssg, input);
        }
    });
});

// Get references to the input elements
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const distanceInput = document.getElementById('distance');
const paceInput = document.getElementById('auto-pace');

// Function to calculate pace
function calculatePace() {
    // Get the values from the input fields
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const distance = parseFloat(distanceInput.value) || 0;

    // Calculate total time in seconds
    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    // Calculate pace in minutes per kilometer
    const pace = totalTimeInSeconds > 0 && distance > 0 ? totalTimeInSeconds / 60 / distance : 0;

    // Update the pace input value
    paceInput.value = pace.toFixed(2); // Round to 2 decimal places
}

// Event listeners for input fields
hoursInput.addEventListener('input', calculatePace);
minutesInput.addEventListener('input', calculatePace);
secondsInput.addEventListener('input', calculatePace);
distanceInput.addEventListener('input', calculatePace);

//complete all fields message
document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', validateFieldsAndOpenMoodOverlay);
});

// check all fields have been completed, if so open the mood overlay (next screen)
function validateFieldsAndOpenMoodOverlay() {
    // Validate input fields excluding the date selector
    const inputs = document.querySelectorAll('input:not(#performance-date)');
    let isValid = true;

    inputs.forEach(function (input) {
        if (input.value === '') {
            isValid = false;
        }
    });

    if (isValid) {
        closeOverlay(); // Close any open overlay
        var moodOverlay = document.getElementById('mood-overlay');
        moodOverlay.classList.add('show'); // Add the 'show' class
        document.getElementById('error-message').textContent = ''; // Clear error message
    } else {
        document.getElementById('error-message').textContent = 'Please complete all fields'; // Display error message
    }
}
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeOverlay();
    }
});

//next button pressed function
document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', openMoodOverlay);
});
//open the mood overlay
function openMoodOverlay() {
    const inputs = document.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(function (input) {
        if (input.value === '') {
            isValid = false;
        }
    });

    if (!isValid) {
        document.getElementById('error-message').textContent = 'Please complete all fields'; // Display error message
        return; // Prevent advancing to mood overlay
    }
}


closeOverlay(); // Close any open overlay
var moodOverlay = document.getElementById('mood-overlay');
moodOverlay.classList.add('show'); // Add the 'show' class


function closeMoodOverlay() {
    var moodOverlay = document.getElementById('mood-overlay');
    moodOverlay.classList.remove('show'); // Remove the 'show' class from the mood-overlay
}

function closeOverlay() {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach(function (overlay) {
        overlay.classList.remove('show'); // Remove the 'show' class from all overlays
    });
}

// Get references to the slider and output elements
const energySlider = document.getElementById('energy-slider');
const energyOutput = document.getElementById('energy-output');

document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
});


// Update the output value when the slider value changes
energySlider.addEventListener('input', function () {
    const value = energySlider.value;
    energyOutput.textContent = `${value}%`;
});

// Function to calculate average percentage
function calculateAverage() {
    // Select all dropdowns
    const dropdowns = document.querySelectorAll('select');
    let totalPercentage = 0;

    // Loop through each dropdown to calculate total percentage
    dropdowns.forEach(dropdown => {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        totalPercentage += parseInt(selectedOption.dataset.percentage);
    });

    // Get the value of the energy slider
    const energySliderValue = parseInt(document.getElementById('energy-slider').value);

    // Calculate the average
    const average = (totalPercentage + energySliderValue) / (dropdowns.length + 1);

    // Update the percentage bar and text
    const percentageBar = document.querySelector('.percentage-bar');
    const percentageText = document.querySelector('.percentage-text');
    percentageBar.style.width = average + '%';
    percentageText.textContent = Math.round(average) + '%';
}

// Calculate average on page load
calculateAverage();

// Add event listeners to dropdowns and energy slider
document.querySelectorAll('select, #energy-slider').forEach(element => {
    element.addEventListener('change', calculateAverage);
});

function saveAndPopulate() {
    // Retrieve data from input fields
    const distance = document.getElementById('distance').value;
    const duration = document.getElementById('hours').value + ':' + document.getElementById('minutes').value + ':' + document.getElementById('seconds').value;
    const steps = document.getElementById('steps').value;
    const pace = document.getElementById('auto-pace').value;

    // Save data to local storage
    let runwiseData = JSON.parse(localStorage.getItem('runwise_data')) || {};

    runwiseData = {
        ...runwiseData,
        distance: distance,
        duration: duration,
        steps: steps,
        pace: pace
    };

    localStorage.setItem('runwise_data', JSON.stringify(runwiseData));
}


// Event listener for the Next button on the overlay
document.querySelector('.next-button').addEventListener('click', function () {
    // Save data to local storage
    saveAndPopulate();
});

// Event listener for the Submit button on the mood overlay
document.querySelector('.submit-button').addEventListener('click', function () {
    // Retrieve data from local storage
    const savedData = JSON.parse(localStorage.getItem('runwise_data'));

    // Populate circles with the saved data
    document.getElementById('distance-circle').textContent = savedData.distance + ' km';
    document.getElementById('duration-circle').textContent = savedData.duration;
    document.getElementById('steps-circle').textContent = savedData.steps;
    document.getElementById('pace-circle').textContent = savedData.pace + ' min / km';

    // Append text back to each circle
    document.getElementById('distance-circle').innerHTML += '<div class="label">Distance</div>';
    document.getElementById('duration-circle').innerHTML += '<div class="label">Duration</div>';
    document.getElementById('steps-circle').innerHTML += '<div class="label">Steps</div>';
    document.getElementById('pace-circle').innerHTML += '<div class="label">Pace</div>';

    // Calculate average mood based on the selected options
    const mentalDropdown = document.getElementById('mental');
    const physicalDropdown = document.getElementById('physical');
    const breathingDropdown = document.getElementById('breathing');
    const energySliderValue = parseInt(document.getElementById('energy-slider').value);

    const totalPercentage = parseInt(mentalDropdown.options[mentalDropdown.selectedIndex].dataset.percentage) +
        parseInt(physicalDropdown.options[physicalDropdown.selectedIndex].dataset.percentage) +
        parseInt(breathingDropdown.options[breathingDropdown.selectedIndex].dataset.percentage) +
        energySliderValue;

    const averageMood = totalPercentage / 4;
    document.getElementById('mood-circle').textContent = Math.round(averageMood) + '%';

    // Append text back to mood circle
    document.getElementById('mood-circle').innerHTML += '<div class="label">Mood</div>';

    // Clear local storage
    localStorage.removeItem('runwise_data');

    // Close mood overlay
    closeMoodOverlay();

    // Update performance-date to match session-date
    const sessionDate = document.getElementById('session-date').value;
    document.getElementById('performance-date').value = sessionDate;

    // Populate chart after data submission
    populateChart(sessionDate); // Call populateChart after submitting data
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the chart with default data for the default date
    const defaultDate = getDefaultDate();
    initializeChart(defaultDate);

    // Add event listener for date change
    document.getElementById('performance-date').addEventListener('change', updateDataBasedOnDate);

    // Populate chart with data for the default date and close overlay
    populateChart();
    closeOverlay();
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the chart with default or existing data
    const defaultDate = getDefaultDate();
    document.getElementById('performance-date').value = defaultDate;
    initializeChart(defaultDate);

    // Attach event listeners to buttons and input fields
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function () {
        const sessionDate = document.getElementById('session-date').value;
        saveAndPopulate(sessionDate); // Save and populate circles based on session date
        updateDataBasedOnDate(sessionDate); // Update chart based on session date
    });

    document.addEventListener('DOMContentLoaded', function () {
        const dateInput = document.getElementById('performance-date');
        dateInput.addEventListener('change', function () {
            const selectedDate = dateInput.value;
            updateDataBasedOnDate(selectedDate);
        });

        const defaultDate = getDefaultDate();
        document.getElementById('performance-date').value = defaultDate;
        initializeChart(defaultDate);
        populateCircles(defaultDate);
    });

});

// Function to initialize the chart with data for a specific date (selected from the performance-date field)
function initializeChart(date) {
    // Retrieve data for the given date or use default data if not available
    const dataForDate = retrieveDataForDate(date) || getDefaultChartData();

    // Chart.js configuration
    const config = {
        type: 'line',
        data: {
            labels: ['Distance', 'Duration', 'Steps', 'Pace'],
            datasets: [{
                label: 'Performance x Goals Percentage',
                backgroundColor: 'rgba(230, 217, 182, 1)',
                borderColor: 'rgba(184, 158, 89, 1)',
                data: dataForDate.map(item => item.value),
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
    window.performanceChart = new Chart(ctx, config);
}

// Function to populate the chart with user-entered data
function populateChart() {
    // Retrieve session date from local storage
    const sessionDate = localStorage.getItem('session_date');

    // Retrieve data from input fields
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    const duration = hours * 3600 + minutes * 60 + seconds;
    const steps = parseInt(document.getElementById('steps').value) || 0;
    const pace = parseFloat(document.getElementById('auto-pace').value) || 0;

    // Define maximum values
    const maxDistance = 15; // Example max value
    const maxDuration = 2 * 3600; // Example max value (2 hours)
    const maxSteps = 20000; // Example max value
    const maxPace = 6.0; // Example max value

    // Calculate percentages
    const distancePercentage = (distance / maxDistance) * 100;
    const durationPercentage = (duration / maxDuration) * 100;
    const stepsPercentage = (steps / maxSteps) * 100;
    const pacePercentage = (pace / maxPace) * 100;

    // Update the chart with user-entered data
    const chart = window.performanceChart;
    chart.data.datasets[0].data = [distancePercentage, durationPercentage, stepsPercentage, pacePercentage];
    chart.update();

    // Save the input data for the current date
    const currentDate = document.getElementById('session-date').value;
    saveDataForDate(currentDate, [
        { label: 'Distance', value: distancePercentage },
        { label: 'Duration', value: durationPercentage },
        { label: 'Steps', value: stepsPercentage },
        { label: 'Pace', value: pacePercentage }
    ]);

    console.log(`Data saved for ${currentDate}:`, [
        { label: 'Distance', value: distancePercentage },
        { label: 'Duration', value: durationPercentage },
        { label: 'Steps', value: stepsPercentage },
        { label: 'Pace', value: pacePercentage }
    ]);
}

// Function to update data based on selected date
function updateDataBasedOnDate() {
    const selectedDate = document.getElementById('performance-date').value;
    const dataForDate = retrieveDataForDate(selectedDate) || getDefaultChartData();
    const chart = window.performanceChart;

    // Update chart data
    chart.data.datasets[0].data = dataForDate.map(item => item.value);
    chart.update();

    populateChart(date);
}

// Helper function to retrieve default date (today's date)
function getDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper function to retrieve default chart data
function getDefaultChartData() {
    return [
        { label: 'Distance', value: 0 },
        { label: 'Duration', value: 0 },
        { label: 'Steps', value: 0 },
        { label: 'Pace', value: 0 }
    ];
}

// Function to save data for a specific date in local storage
function saveDataForDate(date, data) {
    localStorage.setItem(date, JSON.stringify(data));
}

// Function to retrieve data for a specific date from local storage
function retrieveDataForDate(date) {
    const data = localStorage.getItem(date);
    return data ? JSON.parse(data) : null;
}

const navButton = document.querySelector('.nav-icon-button');
const navBar = document.getElementById('navBar');

navButton.addEventListener('click', function () {
    navBar.classList.toggle('active');

    // Check if the navBar is active
    const isActive = navBar.classList.contains('active')
    // If the screen is smaller than 600px and the navBar is active, remove the transform style
    if (window.innerWidth <= 600 && isActive) {
        navBar.style.transform = 'translateX(0)';
    } else if (window.innerWidth <= 600 && !isActive) {
        navBar.style.transform = 'translateX(-100%)';
    }
});

//show the goals overlay when the goals button is selected
document.addEventListener('DOMContentLoaded', function () {
    const goalsButton = document.querySelector('.goals-button');
    const goalsOverlay = document.getElementById('goalsOverlay');

    goalsButton.addEventListener('click', function () {
        goalsOverlay.classList.add('show');
    });

    function closeGoalsOverlay() {
        goalsOverlay.classList.remove('show');
    }

    // Close the overlay if clicked outside the content
    goalsOverlay.addEventListener('click', function (e) {
        if (e.target === goalsOverlay) {
            closeGoalsOverlay();
        }
    });

    // Close the overlay on clicking the close button
    const closeButton = goalsOverlay.querySelector('.close-btn');
    closeButton.addEventListener('click', closeGoalsOverlay);

    // Close the overlay on clicking the confirm button
    const confirmButton = goalsOverlay.querySelector('.confirm-button');
    confirmButton.addEventListener('click', function () {
        closeGoalsOverlay();
    });
});
//Handle the resizing of the chart when screen size is increased or reduced
function handleResize() {
    if (window.performanceChart) {
        window.performanceChart.resize();
    }
}

//show the history overlay when the history button is selected
document.addEventListener('DOMContentLoaded', function () {
    const historyButton = document.querySelector('.history-button');
    const historyOverlay = document.getElementById('historyOverlay');

    historyButton.addEventListener('click', function () {
        historyOverlay.classList.add('show');
    });

    function closeHistoryOverlay() {
        historyOverlay.classList.remove('show');
    }

    // Close the overlay if clicked outside the content
    historyOverlay.addEventListener('click', function (e) {
        if (e.target === historyOverlay) {
            closeHistoryOverlay();
        }
    });

    // Close the overlay on clicking the close button
    const closeButton = historyOverlay.querySelector('.close-btn');
    closeButton.addEventListener('click', closeHistoryOverlay);

   // Close the overlay on clicking the confirm button
   const confirmButton = historyOverlay.querySelector('.confirm-button');
   confirmButton.addEventListener('click', function () {
       closeHistoryOverlay();
   });
});

// History overlay retrieving the data from the local storage, displaying in a table and allowing the user to delete input data.
document.addEventListener('DOMContentLoaded', function () {
    const historyButton = document.querySelector('.history-button');
    const historyOverlay = document.getElementById('historyOverlay');
    const historyContent = document.querySelector('.history-content');

    historyButton.addEventListener('click', function () {
        displayHistory();
        historyOverlay.classList.add('show');
    });

    function closeHistoryOverlay() {
        historyOverlay.classList.remove('show');
    }

    // Close the overlay if clicked outside the content
    historyOverlay.addEventListener('click', function (e) {
        if (e.target === historyOverlay) {
            closeHistoryOverlay();
        }
    });

    // Close the overlay on clicking the close button
    const closeButton = historyOverlay.querySelector('.close-btn');
    closeButton.addEventListener('click', closeHistoryOverlay);

    // Function to retrieve all data from local storage and display it in a table
    function displayHistory() {
        historyContent.innerHTML = ''; // Clear previous content
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            // Parse the JSON string stored in local storage
            const data = JSON.parse(value);

            // Create a new table row
            const row = document.createElement('tr');

            // Create and append a cell for the date
            const dateCell = document.createElement('td');
            dateCell.textContent = key;
            row.appendChild(dateCell);

            // Create a cell for each data item and append to the row
            const dataLabels = ['Distance', 'Duration', 'Steps', 'Pace'];
            dataLabels.forEach(label => {
                const dataItem = data.find(item => item.label === label);
                const cell = document.createElement('td');

                // Format the number to round up and display as a percentage
                if (dataItem) {
                    let formattedValue = Math.round(dataItem.value) + '%';
                    if (formattedValue === '100%') {
                        formattedValue = '100%';
                    }
                    cell.textContent = formattedValue;
                } else {
                    cell.textContent = '';
                }

                row.appendChild(cell);
            });

            // Create a cell for the delete button
            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function () {
                // Remove the corresponding entry from local storage
                localStorage.removeItem(key);

                // Re-display the updated history
                displayHistory();
            });
            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            // Append the row to the table body
            historyContent.appendChild(row);
        }
    }
});
