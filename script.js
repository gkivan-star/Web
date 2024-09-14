document.addEventListener("DOMContentLoaded", () => {
    const sendIP = async () => {
        try {
            // Get the IP address (Placeholder - actual method depends on your needs)
            const ipAddress = await fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => data.ip);

            // Send IP Address to Server
            const response = await fetch('http://192.168.1.75:5000/ip', { // Replace with your server URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ipAddress: ipAddress,
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
