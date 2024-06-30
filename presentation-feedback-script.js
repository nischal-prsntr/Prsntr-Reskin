// Eye Contact Chart
const ctxEyeContact = document.getElementById('eyeContactChart').getContext('2d');
const eyeContactChart = new Chart(ctxEyeContact, {
    type: 'doughnut',
    data: {
        labels: ['Center', 'Up', 'Down', 'Left', 'Right'],
        datasets: [{
            data: [30, 20, 20, 15, 15],
            backgroundColor: ['#B8336A', '#5D6ED0', '#0CC0E8', '#80C89E', '#17A2B8']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Voice Chart
const ctxVoice = document.getElementById('voiceChart').getContext('2d');
const voiceChart = new Chart(ctxVoice, {
    type: 'doughnut',
    data: {
        labels: ['Medium Volume', 'High Volume', 'Low Volume'],
        datasets: [{
            data: [87, 7, 8],
            backgroundColor: ['#80C89E', '#343C6A', '#E80C89']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Pace Chart
const ctxPace = document.getElementById('paceChart').getContext('2d');
const paceChart = new Chart(ctxPace, {
    type: 'line',
    data: {
        labels: [
            '0:00', '0:10', '0:20', '0:30', '0:40', '0:50', 
            '1:00', '1:10', '1:20', '1:30', '1:40', '1:50', 
            '2:00', '2:10', '2:20', '2:30', '2:40', '2:50', 
            '3:00', '3:10', '3:20', '3:30', '3:40', '3:50', 
            '4:00', '4:10', '4:20', '4:30', '4:40', '4:50'
        ],
        datasets: [{
            label: 'Pace (Words per minute)',
            data: [
                110, 112, 111, 113, 112, 114, 
                113, 112, 113, 125, 111, 113, 
                112, 131, 112, 113, 114, 124, 
                112, 123, 140, 118, 113, 112, 
                113, 112, 113, 112, 123, 113
            ],
            backgroundColor: '#BEE3CD',
            borderColor: '#80C89E',
            borderWidth: 2,
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Words per minute'
                },
                min: 100,
                max: 150
            }
        }
    }
});


// Gesture Chart
const ctxGesture = document.getElementById('gestureChart').getContext('2d');
const gestureChart = new Chart(ctxGesture, {
    type: 'bar',
    data: {
        labels: ['First Half', 'Second Half'],
        datasets: [{
            data: [82, 34],
            backgroundColor: ['#E80C89', '#343C6A']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Score Circle
document.addEventListener("DOMContentLoaded", function() {
    const ctxConfidence = document.getElementById('confidenceChart').getContext('2d');
    const confidenceChart = new Chart(ctxConfidence, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [85.5, 14.5], // 85.5% confidence, 14.5% remaining
                backgroundColor: ['#28a745', '#e9ecef']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70, // This makes the doughnut chart hollow
            rotation: -0.5 * Math.PI, // Start the chart at the top
            circumference: 2 * Math.PI, // Full circle
            plugins: {
                tooltip: { enabled: false }, // Disable tooltips
                legend: { display: false }, // Disable legend
            }
        }
    });
});
