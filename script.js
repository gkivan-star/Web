document.addEventListener("DOMContentLoaded", () => {
    const sendIP = async () => {
        try {
            // Get the IP address
            const ipAddress = await fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => data.ip);

            // Send IP Address to Server
            const response = await fetch('https://3282-2c0f-eb68-626-7600-d8f7-3476-d197-d1d5.ngrok-free.app/ip', {
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
