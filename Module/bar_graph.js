const barCtx = document.getElementById('bar-graph').getContext('2d');

new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['TEAM  1', 'TEAM  2', 'TEAM  3', 'TEAM  4','TEAM  5','TEAM  6','TEAM  7','TEAM  8','TEAM  9','TEAM  10'],
    datasets: [{
      label: '', // Set label to an empty string
      data: [25, 14, 9, 5,45,33,23,12,89,76],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

