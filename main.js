let currentBackground = 'default.jpg';

function setBackground(image) {
    document.getElementById('background').style.backgroundImage = `url(${image})`;
}

function calculateCountdownOptions(duration) {
    const countdownOptionsSelect = document.getElementById('countdownOptionsSelect');
    const selectedOption = countdownOptionsSelect.value;

    switch (selectedOption) {
        case 'years':
            return {
                value: duration / (1000 * 60 * 60 * 24 * 365),
                unit: 'years'
            };
        case 'months':
            return {
                value: duration / (1000 * 60 * 60 * 24 * 30),
                unit: 'months'
            };
        case 'weeks':
            return {
                value: duration / (1000 * 60 * 60 * 24 * 7),
                unit: 'weeks'
            };
        case 'days':
            return {
                value: duration / (1000 * 60 * 60 * 24),
                unit: 'days'
            };
        case 'hours':
            return {
                value: duration / (1000 * 60 * 60),
                unit: 'hours'
            };
        case 'minutes':
            return {
                value: duration / (1000 * 60),
                unit: 'minutes'
            };
        case 'seconds':
            return {
                value: duration / 1000,
                unit: 'seconds'
            };
        case 'all':
            return {
                value: duration / (1000 * 60 * 60 * 24 * 365),
                unit: 'all'
            };
    }
}

function updateCountdown(countdownDate, elementId) {
    const now = new Date().getTime();
    const duration = countdownDate - now;

    const countdownOptions = calculateCountdownOptions(duration);

    document.getElementById(elementId).innerHTML = formatCountdown(countdownOptions);

    if (duration < 0) {
        document.getElementById(elementId).innerHTML = "Event has passed";
    }
}

function updateCountdownOptions(countdownDate, elementId) {
    const countdownOptions = calculateCountdownOptions(countdownDate - new Date().getTime());
    document.getElementById(elementId).innerHTML = formatCountdown(countdownOptions);

    if (countdownDate < new Date().getTime()) {
        document.getElementById(elementId).innerHTML = "Event has passed";
    }
}

function formatCountdown(countdownOptions) {
    if (countdownOptions && countdownOptions.value !== undefined) {
        if (countdownOptions.unit === 'all') {
            const years = Math.floor(countdownOptions.value);
            const months = Math.floor((countdownOptions.value % 1) * 12);
            const weeks = Math.floor(((countdownOptions.value % 1) * 12 % 1) * 4.34524);
            const days = Math.floor((((countdownOptions.value % 1) * 12 % 1) * 4.34524 % 1) * 7);
            const hours = Math.floor(((((countdownOptions.value % 1) * 12 % 1) * 4.34524 % 1) * 7 % 1) * 24);
            const minutes = Math.floor((((((countdownOptions.value % 1) * 12 % 1) * 4.34524 % 1) * 7 % 1) * 24 % 1) * 60);
            const seconds = Math.floor(((((((countdownOptions.value % 1) * 12 % 1) * 4.34524 % 1) * 7 % 1) * 24 % 1) * 60 % 1) * 60);

            return `${years} Years <br> ${months} Months <br> ${weeks} Weeks <br> ${days} Days <br> ${hours} Hours <br> ${minutes} Minutes <br> ${seconds} Seconds`;
        } else {
            return `${countdownOptions.value.toFixed(3)} ${countdownOptions.unit}`;
        }
    } else {
        return "Invalid option!";
    }
}

// Function to calculate countdown date for Valentine's Day of the current year
function calculateValentineCountdownDate() {
    const currentYear = new Date().getFullYear();
    const valentineDate = new Date("February 14, " + currentYear + " 00:00:00").getTime();
    return valentineDate;
}

// Function to calculate countdown date for Easter of the current year
function calculateEasterCountdownDate() {
    const currentYear = new Date().getFullYear();
    const a = currentYear % 19;
    const b = Math.floor(currentYear / 100);
    const c = currentYear % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    const easterDate = new Date(currentYear, month - 1, day, 0, 0, 0).getTime();
    return easterDate;
}

// Function to calculate countdown date for Christmas of the current year
function calculateChristmasCountdownDate() {
    const currentYear = new Date().getFullYear();
    const christmasDate = new Date("December 25, " + currentYear + " 00:00:00").getTime();
    return christmasDate;
}

// Function to calculate countdown date for New Year's Day of the next year
function calculateNewYearCountdownDate() {
    const currentYear = new Date().getFullYear();
    const newYearDate = new Date("January 1, " + (currentYear + 1) + " 00:00:00").getTime();
    return newYearDate;
}

// Initial calls to set the countdown dates
let valentineCountDownDate = calculateValentineCountdownDate();
let easterCountDownDate = calculateEasterCountdownDate();
let christmasCountDownDate = calculateChristmasCountdownDate();
let newYearCountDownDate = calculateNewYearCountdownDate();

// Function to update the counter every 1 second for Valentine's Day
const valentineCountdown = setInterval(function() {
    updateCountdown(valentineCountDownDate, "valentineCountdown");
    if (isEventDay(valentineCountDownDate)) {
        document.getElementById("valentineCountdown").innerHTML = `Happy Valentine's Day!`;
        setBackground('valentine.jpg');
    } else {
        setBackground('default.jpg');
    }
}, 1000);

// Function to update the counter every 1 second for Easter
const easterCountdown = setInterval(function() {
    updateCountdown(easterCountDownDate, "easterCountdown");
    if (isEventDay(easterCountDownDate)) {
        document.getElementById("easterCountdown").innerHTML = `Happy Easter!`;
        setBackground('easter.jpg');
    } else {
        setBackground('default.jpg');
    }
}, 1000);

// Function to update the counter every 1 second for Christmas
const christmasCountdown = setInterval(function() {
    updateCountdown(christmasCountDownDate, "christmasCountdown");
    if (isEventDay(christmasCountDownDate)) {
        document.getElementById("christmasCountdown").innerHTML = `Merry Christmas!`;
        setBackground('christmas.jpg');
    } else {
        setBackground('default.jpg');
    }
}, 1000);

// Function to update the counter every 1 second for New Year
const newYearCountdown = setInterval(function() {
    updateCountdown(newYearCountDownDate, "newYearCountdown");
    if (isEventDay(newYearCountDownDate)) {
        document.getElementById("newYearCountdown").innerHTML = `Happy New Year!`;
        setBackground('newyear.jpg');
    } else {
        setBackground('default.jpg');
    }
}, 1000);

// Function to handle the user-defined countdown
document.getElementById("customDateInput").addEventListener("change", function () {
    customCountDownDate = new Date(this.value).getTime();  // Update customCountDownDate
    updateCountdownOptions(customCountDownDate, "customCountdown");
    setBackground('default.jpg');
});

document.getElementById("countdownOptionsSelect").addEventListener("change", function () {
    const customDate = new Date(document.getElementById("customDateInput").value).getTime();
    updateCountdownOptions(customDate, "customCountdown");
});

// Interval for updating the custom countdown every 1 second
const customCountdown = setInterval(function() {
    updateCountdown(customCountDownDate, "customCountdown");
    if (isEventDay(customCountDownDate)) {
        setBackground('default.jpg');
    }
}, 1000);

// Function to check if it's the day of the event
function isEventDay(eventDate) {
    const currentDate = new Date();
    const eventDay = new Date(eventDate).getDate();
    const currentDay = currentDate.getDate();
    return currentDay === eventDay;
}
