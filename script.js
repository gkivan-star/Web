document.addEventListener("DOMContentLoaded", () => {
    const sendIP = async () => {
        try {
            // Get the IP address using ipify API
            const ipAddress = await fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => data.ip);

            // Backend URL (you can replace it directly with your Flask URL if not using environment variables)
            const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://192.168.1.75:5000';

            // Send IP Address to the Flask Server
            const response = await fetch(`${backendURL}/ip`, { // Replace with your Flask server URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ip: ipAddress, // Send the IP address to the Flask server
                }),
            });

            if (response.ok) {
                console.log('IP address sent to server successfully.');
            } else {
                console.error('Failed to send IP address.');
            }
        } catch (error) {
            console.error('Error sending IP address:', error);
        }
    };

    sendIP();
});
