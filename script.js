// script.js

// Function to fetch and update NEPSE data
function fetchNEPSEData() {
    // Replace 'NEPSE_API_ENDPOINT' with the actual API endpoint for fetching NEPSE data
    const nepseAPI = 'NEPSE_API_ENDPOINT';

    fetch(nepseAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the NEPSE index on the webpage
            document.getElementById('nepse-index').textContent = `NEPSE Index: ${data.nepse_index}`;
        })
        .catch(error => {
            console.error('There was a problem fetching NEPSE data:', error);
            document.getElementById('nepse-index').textContent = 'Failed to fetch NEPSE data';
        });
}

// Fetch NEPSE data initially
fetchNEPSEData();

// Fetch NEPSE data every 30 seconds (for example)
setInterval(fetchNEPSEData, 30000); // 30 seconds

