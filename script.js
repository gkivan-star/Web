document.addEventListener("DOMContentLoaded", () => {
    const sendIP = async () => {
        try {
            // Get the IP address using ipify API
            const ipAddress = await fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => data.ip);

            // Backend URL
            const backendURL = 'http://192.168.1.75:5000'; // Flask server URL

            // Send IP Address to the Flask Server
            const response = await fetch(`${backendURL}/ip`, {
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
                document.getElementById('status').innerText = 'IP Address Sent!';
                document.getElementById('sub-status').innerText = 'Thank you!';
            } else {
                console.error('Failed to send IP address.');
                document.getElementById('status').innerText = 'Failed to Send IP!';
                document.getElementById('sub-status').innerText = 'Please try again.';
            }
        } catch (error) {
            console.error('Error sending IP address:', error);
            document.getElementById('status').innerText = 'Error!';
            document.getElementById('sub-status').innerText = 'Please try again later.';
        }
    };

    sendIP();
});
